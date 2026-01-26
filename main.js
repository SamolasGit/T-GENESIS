const get = (id) => document.getElementById(id);
let canvas,
  ctx,
  device,
  pipeline,
  particleBuffer,
  affinityBuffer,
  reactionBuffer,
  paramsBuffer,
  bindGroup;
let n,
  m,
  affinities,
  reactions,
  activeRules = [],
  isReady = false;

const camera = { x: 1000, y: 1000, zoom: 0.5, isDragging: false, lx: 0, ly: 0 };

const shaderCode = `
    struct Particle { pos: vec2<f32>, vel: vec2<f32>, cls: f32, padding: f32 };
    struct Params { dt: f32, friction: f32, n: f32, m: f32, worldSize: f32, rProb: f32, rMin: f32, rMax: f32, beta: f32, p1: f32, p2: f32, p3: f32 };
    
    @group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
    @group(0) @binding(1) var<storage, read> affinities: array<f32>;
    @group(0) @binding(2) var<uniform> params: Params;
    @group(0) @binding(3) var<storage, read> reactions: array<f32>;

    fn hash(u: u32) -> u32 {
        var x = u; x = ((x >> 16) ^ x) * 0x45d9f3b; x = ((x >> 16) ^ x) * 0x45d9f3b; x = (x >> 16) ^ x; return x;
    }

    @compute @workgroup_size(64)
    fn main(@builtin(global_invocation_id) id: vec3<u32>) {
        let i = id.x; if (f32(i) >= params.n) { return; }
        var p_i = particles[i]; var fx = 0.0; var fy = 0.0;
        let rMax = params.rMax; let rMin = params.rMin;

        for (var j: u32 = 0; j < u32(params.n); j++) {
            if (i == j) { continue; }
            let p_j = particles[j];
            var dx = p_j.pos.x - p_i.pos.x; var dy = p_j.pos.y - p_i.pos.y;
            
            if (dx > params.worldSize*0.5) { dx -= params.worldSize; } else if (dx < -params.worldSize*0.5) { dx += params.worldSize; }
            if (dy > params.worldSize*0.5) { dy -= params.worldSize; } else if (dy < -params.worldSize*0.5) { dy += params.worldSize; }

            let r2 = dx*dx + dy*dy;
            if (r2 > 0.0 && r2 < rMax*rMax) {
                let r = sqrt(r2);
                let aff = affinities[u32(p_i.cls) * u32(params.m) + u32(p_j.cls)];
                let f = select(aff * (1.0 - abs(2.0*r - rMax - rMin)/(rMax - rMin)), (r/rMin)-1.0, r < rMin);
                fx += (dx/r)*f*rMax; fy += (dy/r)*f*rMax;

                if (r < rMin && params.rProb > 0.0) {
                    if (f32(hash(i + j + u32(p_i.pos.x))) / 4294967295.0 < params.rProb * 0.005) {
                        p_i.cls = reactions[(u32(p_i.cls) * u32(params.m) + u32(p_j.cls)) * 2u];
                    }
                }
            }
        }
        p_i.vel = (p_i.vel * (1.0 - params.friction)) + (vec2<f32>(fx, fy) * params.beta);
        p_i.pos = (p_i.pos + p_i.vel * params.dt + params.worldSize) % params.worldSize;
        particles[i] = p_i;
    }
`;

async function init() {
  canvas = get("c");
  if (!navigator.gpu) return alert("WebGPU required.");
  const adapter = await navigator.gpu.requestAdapter();
  device = await adapter.requestDevice();
  pipeline = device.createComputePipeline({
    layout: "auto",
    compute: {
      module: device.createShaderModule({ code: shaderCode }),
      entryPoint: "main",
    },
  });
  ctx = canvas.getContext("2d", { alpha: false });
  window.onresize = () => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = (window.innerWidth - 320) * dpr;
    canvas.height = window.innerHeight * dpr;
  };
  window.onresize();
  setupUI();
  reset();
  isReady = true;
  requestAnimationFrame(loop);
}

function reset() {
  n = parseInt(get("nInput")?.value || 10000);
  m = parseInt(get("mInput")?.value || 6);
  const ws = parseFloat(get("worldSizeInput")?.value || 2000);
  camera.x = ws / 2;
  camera.y = ws / 2;

  const pData = new Float32Array(n * 6);
  for (let i = 0; i < n; i++) {
    pData[i * 6] = Math.random() * ws;
    pData[i * 6 + 1] = Math.random() * ws;
    pData[i * 6 + 4] = Math.floor(Math.random() * m);
  }

  affinities = new Float32Array(m * m).map(() => Math.random() * 2 - 1);
  reactions = new Float32Array(m * m * 2);
  activeRules = [];

  particleBuffer = device.createBuffer({
    size: pData.byteLength,
    usage:
      GPUBufferUsage.STORAGE |
      GPUBufferUsage.COPY_DST |
      GPUBufferUsage.COPY_SRC,
  });
  device.queue.writeBuffer(particleBuffer, 0, pData);
  affinityBuffer = device.createBuffer({
    size: m * m * 4,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(affinityBuffer, 0, affinities);
  reactionBuffer = device.createBuffer({
    size: m * m * 8,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });
  paramsBuffer = device.createBuffer({
    size: 48,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      { binding: 0, resource: { buffer: particleBuffer } },
      { binding: 1, resource: { buffer: affinityBuffer } },
      { binding: 2, resource: { buffer: paramsBuffer } },
      { binding: 3, resource: { buffer: reactionBuffer } },
    ],
  });
  updateRegrasUI();
  renderMatrix();
}

async function loop() {
  if (!isReady) return;
  const dt = parseFloat(get("dtInput").value);
  const ws = parseFloat(get("worldSizeInput").value);
  const friction = parseFloat(get("frictionInput").value);
  const rProb = parseFloat(get("reactInput").value);
  const rMin = parseFloat(get("rMinInput").value);
  const rMax = parseFloat(get("rMaxInput").value);
  const beta = parseFloat(get("betaInput").value);
  const pSizeBase = parseFloat(get("pSizeInput").value);

  get("mVal").textContent = m;
  get("dtVal").textContent = dt.toFixed(3);
  get("nVal").textContent = n;
  get("worldSizeVal").textContent = ws;
  get("frictionVal").textContent = friction.toFixed(2);
  get("reactVal").textContent = rProb.toFixed(1);
  get("rMinVal").textContent = rMin;
  get("rMaxVal").textContent = rMax;
  get("betaVal").textContent = beta.toFixed(3);
  get("pSizeVal").textContent = pSizeBase.toFixed(1);

  device.queue.writeBuffer(
    paramsBuffer,
    0,
    new Float32Array([
      dt,
      friction,
      n,
      m,
      ws,
      rProb,
      rMin,
      rMax,
      beta,
      0,
      0,
      0,
    ]),
  );

  const encoder = device.createCommandEncoder();
  const pass = encoder.beginComputePass();
  pass.setPipeline(pipeline);
  pass.setBindGroup(0, bindGroup);
  pass.dispatchWorkgroups(Math.ceil(n / 64));
  pass.end();

  const readBuffer = device.createBuffer({
    size: n * 24,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
  });
  encoder.copyBufferToBuffer(particleBuffer, 0, readBuffer, 0, n * 24);
  device.queue.submit([encoder.finish()]);

  await readBuffer.mapAsync(GPUMapMode.READ);
  const data = new Float32Array(readBuffer.getMappedRange());

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const scale = (Math.min(canvas.width, canvas.height) / ws) * camera.zoom;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(scale, scale);
  ctx.translate(-camera.x, -camera.y);

  const pSize = Math.max(0.1, pSizeBase / camera.zoom);
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = `hsl(${(360 * data[i * 6 + 4]) / m}, 80%, 60%)`;
    ctx.fillRect(data[i * 6], data[i * 6 + 1], pSize, pSize);
  }
  readBuffer.unmap();
  readBuffer.destroy();
  requestAnimationFrame(loop);
}

function setupUI() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.onclick = () => {
      document
        .querySelectorAll(".tab-btn, .tab-content")
        .forEach((el) => el.classList.remove("active"));
      btn.classList.add("active");
      get(btn.dataset.tab).classList.add("active");
    };
  });

  get("randomize").onclick = () => {
    affinities = affinities.map(() => Math.random() * 2 - 1);
    device.queue.writeBuffer(affinityBuffer, 0, affinities);
    renderMatrix();
  };

  get("randomizeReact").onclick = () => {
    activeRules = [];
    const count = Math.floor(Math.random() * 15) + 5;
    for (let i = 0; i < count; i++) {
      activeRules.push([
        Math.floor(Math.random() * m),
        Math.floor(Math.random() * m),
        Math.floor(Math.random() * m),
        Math.floor(Math.random() * m),
      ]);
    }
    updateRegrasUI();
  };

  get("addRuleBtn").onclick = () => {
    const p = [get("pickA"), get("pickB"), get("pickC"), get("pickD")];
    activeRules.push(p.map((x) => parseInt(x.dataset.val)));
    if (activeRules.length > 20) activeRules.shift();
    updateRegrasUI();
  };

  [get("pickA"), get("pickB"), get("pickC"), get("pickD")].forEach((p) => {
    p.onclick = () => {
      p.dataset.val = (parseInt(p.dataset.val) + 1) % m;
      p.style.backgroundColor = `hsl(${(360 * p.dataset.val) / m}, 80%, 60%)`;
    };
  });

  get("reset").onclick = reset;

  canvas.onwheel = (e) => {
    e.preventDefault();
    const ws = parseFloat(get("worldSizeInput").value);
    const scale = (Math.min(canvas.width, canvas.height) / ws) * camera.zoom;
    camera.zoom *= e.deltaY > 0 ? 0.85 : 1.15;
    camera.zoom = Math.min(Math.max(camera.zoom, 0.05), 50.0);
  };

  canvas.onmousedown = (e) => {
    camera.isDragging = true;
    camera.lx = e.clientX;
    camera.ly = e.clientY;
  };
  window.onmousemove = (e) => {
    if (!camera.isDragging) return;
    const scale =
      (Math.min(canvas.width, canvas.height) /
        parseFloat(get("worldSizeInput").value)) *
      camera.zoom;
    camera.x -= (e.clientX - camera.lx) / scale;
    camera.y -= (e.clientY - camera.ly) / scale;
    camera.lx = e.clientX;
    camera.ly = e.clientY;
  };
  window.onmouseup = () => (camera.isDragging = false);
}

function renderMatrix() {
  const mx = get("matrix");
  mx.innerHTML = "";
  mx.style.gridTemplateColumns = `25px repeat(${m}, 1fr)`;
  mx.appendChild(document.createElement("div"));
  for (let col = 0; col < m; col++) {
    const h = document.createElement("div");
    h.className = "matrix-header";
    h.style.backgroundColor = `hsl(${(360 * col) / m},80%,60%)`;
    mx.appendChild(h);
  }
  for (let row = 0; row < m; row++) {
    const rh = document.createElement("div");
    rh.className = "matrix-header";
    rh.style.backgroundColor = `hsl(${(360 * row) / m},80%,60%)`;
    mx.appendChild(rh);
    for (let col = 0; col < m; col++) {
      const i = row * m + col;
      const cell = document.createElement("div");
      cell.className = `matrix-cell ${affinities[i] > 0 ? "cell-positive" : "cell-negative"}`;
      cell.textContent = affinities[i].toFixed(1);
      cell.onclick = () => {
        affinities[i] *= -1;
        device.queue.writeBuffer(affinityBuffer, 0, affinities);
        renderMatrix();
      };
      mx.appendChild(cell);
    }
  }
}

function updateRegrasUI() {
  for (let i = 0; i < m * m; i++) {
    reactions[i * 2] = Math.floor(i / m);
    reactions[i * 2 + 1] = i % m;
  }
  activeRules.forEach((r) => {
    if (r[0] < m && r[1] < m) {
      reactions[(r[0] * m + r[1]) * 2] = r[2];
      reactions[(r[1] * m + r[0]) * 2] = r[3];
    }
  });
  if (device) device.queue.writeBuffer(reactionBuffer, 0, reactions);
  get("activeRulesList").innerHTML = activeRules
    .map(
      (r, i) => `
        <div class="rule-card">
            <span style="color:hsl(${(360 * r[0]) / m},80%,60%)">●</span>+<span style="color:hsl(${(360 * r[1]) / m},80%,60%)">●</span> → <span style="color:hsl(${(360 * r[2]) / m},80%,60%)">●</span>+<span style="color:hsl(${(360 * r[3]) / m},80%,60%)">●</span>
            <button onclick="delRule(${i})" style="margin-left:auto; width:auto; background:none; color:red;">✕</button>
        </div>`,
    )
    .join("");
}
window.delRule = (i) => {
  activeRules.splice(i, 1);
  updateRegrasUI();
};
init();
