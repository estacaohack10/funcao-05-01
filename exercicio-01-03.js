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
  if (texto === '') {
    return '';
  }
  else {
    return inverter(texto.substring(1)) + texto.charAt(0);
  }
}

//inverter('ibe') + 'k'
//inverter('be') + 'i'
//inverter('e') + 'b'
//inverter('') + 'e'
//''
//'' + 'e' + 'b' + 'i' + 'k'