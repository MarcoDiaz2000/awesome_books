/*  eslint-disable max-classes-per-file, no-unused-vars */
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class BookManager {
  static createBookElement(book) {
    return `
      <tr id="${book.id}">
        <td class="book-info"> "${book.title}" by ${book.author}</td>
        <td class="remove-button">
          <button type="button" onclick="removeBookWrapper('${book.id}')">Remove</button>
        </td>
      </tr>`;
  }

  static loadData() {
    const tbody = document.querySelector('tbody');
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.forEach((bookData) => {
      const book = new Book(bookData.title, bookData.author, bookData.id);
      tbody.innerHTML += BookManager.createBookElement(book);
    });
  }

  addBook() {
    this.title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = new Date().getTime().toString();
    const book = new Book(this.title, author, id);
    const tbody = document.querySelector('tbody');
    tbody.innerHTML += BookManager.createBookElement(book);
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push({ title: book.title, author: book.author, id: book.id });
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(id) {
    const tbody = document.querySelector('tbody');
    const book = document.getElementById(id);
    tbody.removeChild(book);

    const books = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = books.filter((bookData) => bookData.id !== id);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }
}

const bookManager = new BookManager();

function removeBookWrapper(id) {
  BookManager.removeBook(id);
}
