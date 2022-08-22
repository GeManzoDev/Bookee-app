import { loader } from '../elements';
import { results } from '../elements';

//funzione per rendere visibile il loader
export function displayLoader() {
  loader.classList.remove('hidden');
  results.appendChild(loader);
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 5000);
}

//funzione per rimuovere il loader
export function removeLoader() {
  loader.classList.add('hidden');
  results.removeChild(loader);
}
