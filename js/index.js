function loadData() {
  const data = document.getElementById('data');
  if (localStorage.getItem('books')) {
    data.innerHTML = localStorage.getItem('books');
  }
}

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const data = document.getElementById('data');
  const id = new Date().getTime();
  const book = `
      <div id="${id}">
        <p>Title: ${title}<br>Author: ${author}</p>
        <button type="button" onclick="removeBook(${id})">Remove</button>
        <hr/>
      </div>`;
  data.innerHTML += book;
  localStorage.setItem('books', data.innerHTML);
}

function removeBook(id) {
  const data = document.getElementById('data');
  const book = document.getElementById(id);
  data.removeChild(book);
  const newData = data.innerHTML;
  localStorage.setItem('books', newData);
}

window.onload = () => {
  const a = loadData;
  const b = addBook;
  const c = removeBook;
  console.log(a);
  console.log(b);
  console.log(c);
};