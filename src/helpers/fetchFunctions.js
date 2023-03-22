export const fetchProduct = () => {
  // seu código aqui
};

const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const fetchProductsList = (busca) => {
  if (!busca) {
    throw new Error('Termo de busca não informado');
  }
  return fetch(`${BASE_URL}${busca}`)
    .then((response) => response.json())
    .then((data) => data.results);
};
