const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "João", nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsistas?
const TodosSaoBolsistas = alunos
  .map((a) => a.bolsista)
  .reduce(function (acumulador, valorAtual) {
    if (!acumulador) {
      return false;
    }
    return acumulador && valorAtual;
  }, true);

console.log(TodosSaoBolsistas);

// Desafio 2: Algum aluno é bolsista?

const AlgumAlunoBolsista = alunos
  .map((a) => a.bolsista)
  .reduce((acumulado, atual) => acumulado || atual);

console.log(AlgumAlunoBolsista);
