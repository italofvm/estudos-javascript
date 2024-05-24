const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

// Retornar um array apenas com os preços
let resultado = carrinho.map(function (preco) {
  return preco;
});

console.log(resultado);

const precos = (preco) =>
  `R$ ${parseFloat(JSON.parse(preco).preco.toFixed(2))}`;

resultado = carrinho.map(precos);

console.log(resultado);
