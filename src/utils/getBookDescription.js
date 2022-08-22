//funzione per ottenere descrizione libro

import axios from 'axios';

export const getBookDescription = async (key, el) => {
  const res = await axios.get(`https://openlibrary.org${key}.json`, {
    headers: { Accept: 'application/json' },
  });
  const description = res.data.description;
  let desc = document.createElement('div');
  desc.classList.add('description');
  el.appendChild(desc);
  //se è presente una descrizione
  if (description) {
    //se la descrizione è formata da un oggetto, estrapolare il valore
    if (description.value) {
      desc.innerHTML = description.value;
    } else desc.innerHTML = description;
  } else {
    desc.innerHTML = 'no description available for this book :(';
    desc.classList.add('error-message');
  }
};
