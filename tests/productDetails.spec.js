const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')
  });
  it('Verifica se o retorno da função tem o comportamento de um array', () => {
    // Teste se o retorno da função é um array.
    expect(typeof productDetails('Alcool gel', 'Másccara')).toBe('object')
  });
  it('Verifica se o array retornado possui dois itens', () => {
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails('Alcool gel', 'Másccara')).length).toEqual(2)
  });
  it('Verifica se o os dois itens dentro do array retornado pela função são objetos', () => {
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool gel', 'Másccara')[0]).toBe('object')
    expect(typeof productDetails('Alcool gel', 'Másccara')[1]).toBe('object')
  });
  it('Verifica se quando passa parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Másccara')[0].name).not.toBe(productDetails('Alcool gel', 'Másccara')[1].name)
  });
  it('Verifica se o os dois productIds terminam com 123', () => {
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Alcool gel', 'Másccara')[0].details.productId).toBe('Alcool gel123')
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toBe('Máscara123')
  });

});
