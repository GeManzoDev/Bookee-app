//funzione per ottenere cover del libro

export function getBookCover(id, parentEl) {
  let cover = document.createElement('img');
  cover.classList.add('book-cover');
  cover.setAttribute(
    'src',
    `https://covers.openlibrary.org/b/id/${id}-M.jpg?default=false `
  );
  parentEl.appendChild(cover);
}
