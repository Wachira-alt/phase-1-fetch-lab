function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Fetch from API
    .then((resp) => resp.json()) // Convert response to JSON
    .then((books) => renderBooks(books)) // Pass to renderBooks
    .catch((error) => console.error("Error fetching books:", error)); // Error handling
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// Export for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}
