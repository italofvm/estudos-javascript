function repetir(elementoUm, elementoDois) {
  let resultado = [];
  for (let i = 0; i < elementoDois; i++) {
    resultado.push(elementoUm);
  }

  return resultado;
}

let textoRepetido = repetir("Brasil", 3);
console.log(repetir);
