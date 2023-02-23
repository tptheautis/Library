let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  const libraryElement = document.querySelector('#library-cards');
  libraryElement.innerHTML = '';
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `<p>${book.title}</p>`;
    libraryElement.appendChild(bookElement);
  }
}

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
  render();
}

let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', function() {
  let newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = 'block';
});

document.querySelector('#new-book-form').addEventListener('submit', function(event) {
  event.preventDefault;
  addBookToLibrary();
  alert('submit');
})