const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const ID_URL = 'https://api.mercadolibre.com/items/';

export const fetchProduct = (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  return fetch(`${ID_URL} ${id}`)
    .then((response) => response.json())
    .then((data) => data);
};

export const fetchProductsList = (busca) => {
  if (!busca) {
    throw new Error('Termo de busca não informado');
  }
  return fetch(`${BASE_URL}${busca}`)
    .then((response) => response.json())
    .then((data) => data.results);
};
