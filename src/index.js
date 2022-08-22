import { searchBar, searchBtn, results, logo, loader } from './elements.js';
import './styles/bookLoader.css';
import './styles/main.css';
import { getBook } from './utils/getBook.js';
import { clearInterface } from './utils/clearInterface.js';
import { clearSearchBar } from './utils/clearSearchBar.js';

searchBtn.addEventListener('click', () => {
  clearInterface();
  results.appendChild(loader);
  getBook(input.value);
  clearSearchBar();
});

searchBar.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    clearInterface();
    getBook(searchBar.value);
    clearSearchBar();
  }
});

logo.addEventListener('click', () => {
  document.location.reload();
});
