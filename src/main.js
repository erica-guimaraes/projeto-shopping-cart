import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const product = document.querySelector('.products');

const addLoading = () => {
  const p = document.createElement('p');
  p.className = 'loading';
  p.innerHTML = 'carregando...';
  product.appendChild(p);
  return p;
};

const error = () => {
  const p = document.createElement('p');
  p.className = 'error';
  p.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  product.appendChild(p);
  return p;
};

const remove = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const creatList = async () => {
  addLoading();
  try {
    const list = await fetchProductsList('computador');
    list.forEach((element) => {
      product.appendChild(createProductElement(element));
    });
    remove();
  } catch {
    error();
  }
};
creatList();

document.querySelector('.cep-button').addEventListener('click', searchCep);
