const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// 2. Rota para SPA (index.html)
// Usamos uma Expressão Regular pura /.*/ para capturar absolutamente tudo
// Sem aspas, para evitar que o path-to-regexp tente parsear como string
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 3. Inicialização do servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor rodando com sucesso!`);
  console.log(`🔗 Acesse: http://localhost:${PORT}`);
});
