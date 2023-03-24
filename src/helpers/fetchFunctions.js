const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const ID_URL = 'https://api.mercadolibre.com/items/';

export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`${ID_URL}${id}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = (busca) => {
  if (!busca) {
    throw new Error('Termo de busca não informado');
  }
  return fetch(`${BASE_URL}${busca}`)
    .then((response) => response.json())
    .then((data) => data.results);
};
