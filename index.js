const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.get("/hello/:nome", (req, res) => {
  let nome = req.params.nome;
  res.json({ msg: `Hello World, ${nome}!` });
});

app.get("/calc/:op1/:op2", (req, res) => {
  let op1 = parseFloat(req.params.op1);
  let op2 = parseFloat(req.params.op2);  
  let resultado = isNaN(op1) || isNaN(op2) ? "Entradas inválidas" : op1 + op2;
  res.json({ resultado: resultado });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
  console.log("http://localhost:3000/hello/Felipe.Martins")
  console.log("http://localhost:3000/calc/10/5")
});
