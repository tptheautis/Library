let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  const libraryElement = document.getElementById('libraryCards');
  libraryElement.innerHTML = '';
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `
      <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">by ${book.author}</h5>
      
    `;
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
  event.preventDefault();
  addBookToLibrary();
})