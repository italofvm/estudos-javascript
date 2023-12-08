const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaaa"; // contexto léxico 2]
  return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor

const Cliente = {
  nome: "Italo",
  idade: 28,
  peso: 80,
  endereco: {
    logradouro: "Rua Ali perto",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(Cliente);
