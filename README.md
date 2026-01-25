# T‑GENESIS

**T‑Genesis** é um simulador de vida artificial baseado em partículas, concebido como um laboratório computacional para o estudo de **comportamentos emergentes**. O projeto passou por múltiplas versões, refatorações profundas e otimizações estruturais até alcançar um nível de maturidade adequado para publicação, experimentação e extensão.

Diferente de simuladores tradicionais, o T‑Genesis **não busca reproduzir fielmente a realidade física, química ou biológica**. Seu foco está na emergência: como regras simples, locais e determinísticas (ou parcialmente probabilísticas) podem gerar padrões globais inesperados, assimétricos e, muitas vezes, surpreendentes.

---

## 🌱 Visão Geral

No T‑Genesis, partículas interagem continuamente em um espaço bidimensional. Cada partícula pertence a uma espécie e responde a um conjunto de forças definido por **matrizes de afinidade**, além de **regras de reação probabilística**. A partir disso, surgem:

* Agrupamentos espontâneos
* Estruturas dinâmicas estáveis ou caóticas
* Ciclos de crescimento e colapso
* Transições de fase comportamentais

O sistema não é controlado diretamente: o observador atua apenas como **designer das regras**, nunca como condutor do resultado.

---

## 🎯 Objetivos do Projeto

### 🧠 Sistemas Complexos

Explorar como sistemas complexos podem emergir a partir de interações locais simples, sem coordenação global ou inteligência explícita.

### 🔢 Matrizes de Afinidade

Investigar como diferentes configurações de atração e repulsão entre espécies impactam a formação de padrões, ecossistemas artificiais e dinâmicas coletivas.

### ⚗️ Reações Probabilísticas

Implementar mecanismos de transformação de partículas baseados em encontros locais, simulando transições de estado, mutações ou reações químicas abstratas.

### 🌀 Padrões Emergentes

Observar fenômenos como:

* Auto‑organização
* Simetria quebrada
* Oscilações
* Estabilidade dinâmica
* Extinções e dominação de espécies

### 🧪 Laboratório Visual

Servir como uma base flexível para novos experimentos em:

* Vida artificial
* Sistemas dinâmicos
* Autômatos contínuos
* Simulações bio‑inspiradas

### ⚡ Alta Performance

Estudar escalabilidade e eficiência computacional, permitindo simulações com **dezenas ou centenas de milhares de partículas em tempo real**.

---

## 💡 Motivação

O T‑Genesis nasceu da influência do meu professor de Química do ensino médio, que me aliemntou com essa vontade de simular, descobrir e aprender coisas novas.

---

## 🚀 Instalação e Execução

O T‑Genesis foi projetado para ser simples de executar, sem dependências externas complexas.

### ▶️ Usando Live Server (Recomendado)

1. **Clone o repositório:**

```bash
git clone https://github.com/SamolasGit/ParticleLife.git
```

2. Abra a pasta no **VS Code**.
3. Instale a extensão **Live Server** (Ritwick Dey).
4. Clique com o botão direito em `index.html` e selecione **“Open with Live Server”**.

### ✅ Requisitos

* Navegador moderno com suporte a **WebGPU** ou **Canvas 2D**.
* GPU compatível (recomendado para simulações densas).
* VS Code (opcional, para desenvolvimento).

---

## ⚙️ Arquitetura e Funcionamento

A simulação ocorre em um espaço 2D contínuo com **condições periódicas** (topologia de toro). Cada partícula possui:

* **Posição (x, y)**
* **Velocidade (vx, vy)**
* **Espécie / Classe**
* **Estado interno (opcional)**

### 🔗 Mecânicas Principais

#### 1. Matrizes de Afinidade

Cada par de espécies possui um valor de afinidade que determina:

* Atração positiva
* Repulsão negativa
* Neutralidade

Esses valores moldam diretamente a dinâmica global do sistema.

#### 2. Cálculo de Forças

* Utiliza **Hash Espacial (Spatial Hashing)** para reduzir a complexidade computacional.
* Apenas partículas vizinhas dentro de um raio máximo são consideradas.

**Parâmetros principais:**

* **Raio Máximo (Rₘₐₓ):** alcance da interação.
* **Raio Mínimo (Rₘᵢₙ):** zona de repulsão forte para evitar sobreposição.

A força aplicada é proporcional à afinidade entre as espécies.

#### 3. Sistema de Reações

Quando partículas entram na zona crítica de interação:

* Existe uma **probabilidade de reação**.
* Uma ou ambas podem mudar de espécie.
* O sistema pode gerar cadeias de transmutação.

Esse mecanismo introduz não‑linearidade e imprevisibilidade.

#### 4. Física e Atualização

* Integração simples de movimento.
* Atrito aplicado à velocidade para evitar crescimento infinito de energia.
* Atualização síncrona por frame.

#### 5. Condições Periódicas

Partículas que atravessam um limite do espaço reaparecem no lado oposto, criando um mundo fechado sem bordas artificiais.

---

## 🎨 Renderização e Tecnologia

* Renderização baseada em **WebGPU**, com fallback para **Canvas**.
* Capaz de lidar com alta densidade de partículas mantendo FPS estável.
* Separação clara entre lógica de simulação e visualização.

---

## 🔮 Possíveis Extensões Futuras

* Espaço 3D
* Visualização de campos vetoriais
* Genomas artificiais
* Aprendizado adaptativo das afinidades
* Exportação de dados para análise científica

---

## 📌 Considerações Finais

O **T‑Genesis** não é um jogo, nem uma simulação científica tradicional. Ele é um **ambiente experimental**, onde o principal objetivo é observar, questionar e se surpreender.

O controle está nas regras — não nos resultados.
