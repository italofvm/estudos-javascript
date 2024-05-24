function estaEntre(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo) {
    return numero >= minimo && numero <= maximo;
  } else {
    return numero > minimo && numero < maximo;
  }
}

// Exemplos de uso:
console.log(estaEntre(10, 50, 100)); // Saída: true
console.log(estaEntre(16, 100, 160)); // Saída: false
console.log(estaEntre(3, 3, 150)); // Saída: false
console.log(estaEntre(3, 3, 150, true)); // Saída: true
