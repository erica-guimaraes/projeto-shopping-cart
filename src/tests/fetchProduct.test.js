import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct com o argumento "MLB1405519561"', async() => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('Ao chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função utiliza o endpoint correto', async() => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('Testando o retorno da função fetchProduct com o argumento "MLB1405519561"', async() => {
    expect(await fetchProduct('MLB1405519561')).toEqual(product);
  });
  it('A função fetchProduct deve retornar uma mensagem de erro, caso não receba como parâmetro um id', async() => {
    await expect(fetchProduct()).rejects.toThrow(new Error('ID não informado'));
  })
});
