/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// consigo pegar cada valor de um array (Dica do aluno Guilherme)
const average = (array) => {
  if (array.some((numero) => typeof numero !== 'number')) {
    return undefined;
  }
  if (array.length === 0) {
    return undefined;
  }

let avg = 0;
let sum = 0;

for (let i = 0; i < array.length; i += 1) {
  sum += array[i];
  avg = sum / array.length;
 }
  return Math.round(avg);
};

// console.log(average([]));
module.exports = average;