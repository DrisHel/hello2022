const express = require("express");

const app = express();

/* app.get("/primeira-rota", (request, response) => {
  return response.send("Acessou primeira rota");
}); */
app.post("/products", (request, response) => {
  const body = request.body;
  console.log(body);
});
app.listen(8000, () => console.log("Servidor rodando na porta 8000!"));
