function maiorOuIgual(numeroUm, numeroDois) {
  if (typeof numeroUm !== "number" || typeof numeroDois !== "number") {
    return false;
  } else {
    return numeroUm >= numeroDois;
  }
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));
