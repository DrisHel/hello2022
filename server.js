const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("Primeira aplicação do ano de 2022!");
});

server.listen(8000, () => console.log("Servidor rodando ma porta 8000!"));
