function createBookElement(title, author, id) {
  return `
    <div id="${id}">
      <p>Title: ${title}<br>Author: ${author}</p>
      <button type="button" onclick="removeBook('${id}')">Remove</button>
      <hr/>
    </div>`;
}

// eslint-disable-next-line no-unused-vars
function loadData() {
  const data = document.getElementById('data');
  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.forEach((book) => {
    data.innerHTML += createBookElement(book.title, book.author, book.id);
  });
}

// eslint-disable-next-line no-unused-vars
function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = new Date().getTime().toString();
  const data = document.getElementById('data');
  data.innerHTML += createBookElement(title, author, id);

  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.push({ title, author, id });
  localStorage.setItem('books', JSON.stringify(books));
}

// eslint-disable-next-line no-unused-vars
function removeBook(id) {
  const data = document.getElementById('data');
  const book = document.getElementById(id);
  data.removeChild(book);

  const books = JSON.parse(localStorage.getItem('books')) || [];
  const updatedBooks = books.filter((book) => book.id !== id);
  localStorage.setItem('books', JSON.stringify(updatedBooks));
}
