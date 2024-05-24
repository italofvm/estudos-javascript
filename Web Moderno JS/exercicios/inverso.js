function inverso(valor) {
  if (valor == true) {
    console.log(false);
  } else if (typeof valor !== "number") {
    console.log(
      "booleano ou número esperados, mas o parâmerto é do tipo string"
    );
  } else {
    console.log(Math.abs(valor));
  }
}

inverso(true);
inverso("6");
inverso(-5000);
inverso("Programação");
