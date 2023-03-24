import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async() => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async() => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Testando o retorno da função fetchProductsList com o argumento computador ', async() => {
    expect(await fetchProductsList('computador')).toEqual(computadorSearch);
  });
  it('A função fetchProductsList deve retornar uma mensagem de erro, caso não receba um parâmetro de busca', async() => {
    await expect(fetchProductsList()).rejects.toThrow(new Error('Termo de busca não informado'));
  })
});
