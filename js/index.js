function loadData() {
    let data = document.getElementById("data");
    if (localStorage.getItem("books")) {
      data.innerHTML = localStorage.getItem("books");
    }
  }

function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let data = document.getElementById("data");
    let id = new Date().getTime();
    let book = `
      <div id="${id}">
        <p>Title: ${title}<br>Author: ${author}</p>
        <button type="button" onclick="removeBook(${id})">Remove</button>
        <hr/>
      </div>`;
    data.innerHTML += book;
    localStorage.setItem("books", data.innerHTML);
  }
  
  function removeBook(id) {
    let data = document.getElementById("data");
    let book = document.getElementById(id);
    data.removeChild(book);
    let newData = data.innerHTML;
    localStorage.setItem("books", newData);
  }