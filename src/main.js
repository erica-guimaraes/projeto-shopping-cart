import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const creatList = async () => {
  const list = await fetchProductsList('computador');
  const product = document.querySelector('.products');
  list.forEach((element) => {
    product.appendChild(createProductElement(element));
  });
};
creatList();

document.querySelector('.cep-button').addEventListener('click', searchCep);
