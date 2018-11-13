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
  return texto.split('').reverse().join('');
}
