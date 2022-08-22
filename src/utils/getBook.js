import axios from 'axios';
import { results } from '../elements.js';
import { displayLoader } from './loader.js';
import { removeLoader } from './loader.js';
import { getBookCover } from './getBookCover.js';
import { getBookDescription } from './getBookDescription';

//funzione che fetcha i dati dall'api
export const getBook = async (subject) => {
  try {
    displayLoader();
    const res = await axios.get(
      `https://openlibrary.org/subjects/${subject.toLowerCase()}.json`
    );
    const books = res.data.works;
    //se l'input dell'utente ritorna una risposta valida
    //Da questi dati estrapolo titolo, chiave ed autore per ogni libro
    if (books.length > 0) {
      removeLoader();
      books.forEach((book) => {
        let title = book.title;
        let key = book.key;
        let coverId = book.cover_id;
        let authors = [];
        book.authors.forEach((author) => {
          authors.push(author.name);
        });
        //creo div dove inserirò i dati dei libri (autori, titoli, eventuali descrizioni)
        let bookDetails = document.createElement('div');
        bookDetails.classList.add('book-details');
        //creo h3 dove inserirò titolo ed autori dei libri
        let bookItem = document.createElement('h3');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `${title} written by ${authors}`;
        //appendo h3 a div bookdetails
        bookDetails.appendChild(bookItem);
        //chiamo funzione per ottenere cover del libro
        getBookCover(coverId, bookDetails);
        //infine appendo il tutto al div contenitore results
        results.appendChild(bookDetails);
        //aggiungo evento al click per chiamare funzione che visualizzerà la descrizione
        bookDetails.addEventListener('click', () => {
          if (bookDetails.contains(document.querySelector('.description'))) {
            document.querySelector('.description').remove();
          } else getBookDescription(key, bookDetails);
        });
      });
    } else {
      setTimeout(() => {
        let notFoundMessage = document.createElement('div');
        notFoundMessage.classList.add('error-message');
        notFoundMessage.innerHTML = `${subject} not found :(`;
        results.appendChild(notFoundMessage);
      }, 5100);
    }
  } catch (e) {
    console.log(e);
    let errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.innerHTML = 'something went wrong...';
    results.appendChild(errorMessage);
  }
};
