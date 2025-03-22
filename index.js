function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  function fetchBooks() {
    return fetch("https://anapioficeandfire.com/api/books")
      .then((resp) => resp.json())
      .then((books) => renderBooks(books));
  }
  
  function renderBooks(books) {
    const bookList = document.getElementById("book-list"); // Make sure there's an element with this ID in index.html
    books.forEach((book) => {
      const li = document.createElement("li");
      li.textContent = book.name; // Displaying book titles
      bookList.appendChild(li);
    });
  }
  
  // Call fetchBooks() when the page loads
  document.addEventListener("DOMContentLoaded", fetchBooks);
  
  
}
