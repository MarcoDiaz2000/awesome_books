function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let data = document.getElementById("data");
    let book = "Title: " + title + "<br>Author: " + author + "<hr/>";
    data.innerHTML += "<p>" + book + "</p>";
  }
// save data
  localStorage.setItem("books", book);

// get data storage
data.innerHTML = "<p>" + localStorage.getItem("books") + "</p>";


  
  