const path = require("path");
const express = require("express");
const app = express();

// Serve arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, "public")));

// Catch-all para SPA
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
