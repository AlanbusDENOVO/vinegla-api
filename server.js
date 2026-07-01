const express = require("express");
const app = express();
const assinantes = ["josep", "vinegla_user"]; // Adicione quem quiser

app.get("/api/check", (req, res) => {
  const user = req.query.user;
  res.json({ isPaying: assinantes.includes(user) });
});

app.listen(process.env.PORT || 3000, () => console.log("Servidor ativo!"));
