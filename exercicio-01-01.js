/*
EXERCICIO:

Criar uma função que inverte todos os caracteres de uma string.
- Ela deve receber um parâmetro de texto;
- Ela deve utilizar um laço para inverter esse texto e retorná-lo;

Ex.:
  Input: 'bolovo',
  Output: 'ovolob'
*/

function inverter(texto) {
  let saida = '';

  for (let i = texto.length - 1; i >= 0; i --) {
    saida += texto[i];
    console.log(`Passo ${i}: ${saida}`);
  }

  return saida;
}
