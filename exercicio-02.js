/*
Criar 3 funções, onde:

- A primeira função recebe o nome e o conjunto de notas;
- A segunda função diz qual é a média do aluno;
- A terceira função diz se o aluno foi aprovado ou não, considerando que a média é 6 ;


Exemplo:
  Input: testarAluno('Roberval', [6, 5, 5, 4.5]);
  Ouput: 'Roberval foi reprovado';
*/

function calcularMedia (notas) {
  let media = 0;

  for (const nota of notas) {
    media += nota;
  }

  media = media / notas.length;

  return media;
}

function verificarAprovacao(mediaDoAluno, mediaDaEscola) {
  if (mediaDoAluno >= mediaDaEscola) {
    return true;
  }
  else {
    return false;
  }
}

function testarAluno (aluno, notas, mediaDaEscola) {
  let media = calcularMedia (notas);

  if (verificarAprovacao(media, mediaDaEscola)) {
    console.log(`${aluno} foi aprovado!`);
  }
  else {
    console.log(`${aluno} foi reprovado!`);
  }
}