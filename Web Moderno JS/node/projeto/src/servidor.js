const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const bd = require('./bd.js')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res) => {
  const produtos = bd.getProdutos();
  const produtosJSON = JSON.stringify(produtos);
  res.send(produtosJSON);
})

app.get('/produtos/:id', (req, res, next) => {
  const produto = bd.getProduto(req.params.id);
  const produtoJSON = JSON.stringify(produto);
  res.send(produtoJSON);
})

app.post('/produtos', (req, res, next) => {
  const produto = bd.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });
  const produtoJSON = JSON.stringify(produto);
  res.send(produtoJSON);
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bd.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  });
  const produtoJSON = JSON.stringify(produto);
  res.send(produtoJSON);
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bd.excluirProdutos(req.params.id)
  res.send(produto);
})

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}.`)
})
