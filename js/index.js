function createBookElement(title, author, id) {
  return `
    <tr id="${id}">
      <td class="book-info"> "${title}" by ${author}</td>
      <td class="remove-button">
        <button type="button" onclick="removeBook('${id}')">Remove</button>
      </td>
    </tr>`;
}

// eslint-disable-next-line no-unused-vars
function loadData() {
  const tbody = document.querySelector('#data tbody');
  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.forEach((book) => {
    tbody.innerHTML += createBookElement(book.title, book.author, book.id);
  });
}

// eslint-disable-next-line no-unused-vars
function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = new Date().getTime().toString();
  const tbody = document.querySelector('#data tbody');
  tbody.innerHTML += createBookElement(title, author, id);

  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.push({ title, author, id });
  localStorage.setItem('books', JSON.stringify(books));
}

// eslint-disable-next-line no-unused-vars
function removeBook(id) {
  const tbody = document.querySelector('#data tbody');
  const book = document.getElementById(id);
  tbody.removeChild(book);

  const books = JSON.parse(localStorage.getItem('books')) || [];
  const updatedBooks = books.filter((book) => book.id !== id);
  localStorage.setItem('books', JSON.stringify(updatedBooks));
}
