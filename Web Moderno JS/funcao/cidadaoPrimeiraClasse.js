// Função em js é First-class Object (Citizens)
// Higher-order function, ou funções que recebem outra função como parâmetro.

// criar de forma literal
function fun1() {}

// Armazenar em uma variavel
const fun2 = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

console.log(array[0](2, 3));

// Armazenar em umatributo de objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

// Passar uma função como parametro
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});
