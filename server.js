const express = require("express");
const path = require("path");

const app = express();

// Define a porta dinamicamente (Railway fornece via env PORT)
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Rotas de fallback (qualquer rota serve index.html)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
