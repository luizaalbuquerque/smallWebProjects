// Initialize an empty array to hold book recommendations
let bookRecommendations = [];

// Select the form and input fields for posting book recommendations
const postForm = document.querySelector('.post-recommendation form');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookDescription = document.getElementById('book-description');

// Select the search input field and the book list container
const searchInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list');

// Function to display book recommendations
function displayBooks(books) {
  // Clear the book list container
  bookList.innerHTML = '';
  
  // Loop through the book recommendations array and create HTML elements for each book
  books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `By ${book.author}`;
    
    const bookDescription = document.createElement('p');
    bookDescription.textContent = book.description;
    
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookDescription);
    bookList.appendChild(bookItem);
  });
}

// Function to filter book recommendations based on search input
function filterBooks(searchTerm) {
  const filteredBooks = bookRecommendations.filter(book => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           book.author.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  displayBooks(filteredBooks);
}

// Event listener for form submission to post book recommendations
postForm.addEventListener('submit', event => {
  event.preventDefault();
  
  // Create a new book recommendation object and add it to the array
  const newBook = {
    title: bookTitle.value,
    author: bookAuthor.value,
    description: bookDescription.value,
  };
  bookRecommendations.push(newBook);
  
  // Clear the input fields
  bookTitle.value = '';
  bookAuthor.value = '';
  bookDescription.value = '';
 
});

// Event listener for search input to filter book recommendations
searchInput.addEventListener('input', event => {
  const searchTerm = event.target.value;
  
  filterBooks(searchTerm);
});


// Get all the book-info containers in the table
const bookInfos = document.querySelectorAll('.book-info');

// Loop through each book-info container and add an event listener
bookInfos.forEach(bookInfo => {
  const img = bookInfo.querySelector('img');
  const p = bookInfo.querySelector('p');

  // Hide the text description on page load
  p.style.display = 'none';

  img.addEventListener('click', () => {
    // Toggle the display property of the text description
    p.style.display = p.style.display === 'none' ? 'block' : 'none';
  });
});

