function multiplicar(numero1, numero2) {
  let resultado = 0;
  for (let i = 0; i < numero2; i++) {
    resultado += numero1;
  }

  return resultado;
}

const resultado = multiplicar(5, 5);
console.log(resultado);
const resultado2 = multiplicar(0, 7);
console.log(resultado2);
