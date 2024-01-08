//Array to hold book objects
const myLibrary = [];

//Constructor to template book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//function to take users input and add new book object to array
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    )
    return myLibrary.unshift(book)
}

//Example of adding book object
addBookToLibrary('The Alchemist', 'Paulo Coelho', 400, 'False')
addBookToLibrary('Harry Potter', 'J.K. Rowling', 650, 'True')
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 1000, 'False')
addBookToLibrary('Atomic Habits', 'James Clear', 300, 'False')
console.log(myLibrary)

//Connect myLibrary array to table
const bookTitle = document.querySelector('.title')
const bookAuthor = document.querySelector('.author')
const bookPages = document.querySelector('.pages')
const bookRead = document.querySelector('.read')

myLibrary.forEach(() => {
    for (i=0; 1<myLibrary.length; i++) {
        bookTitle.textContent = myLibrary[i].title
        bookAuthor.textContent = myLibrary[i].author
        bookPages.textContent = myLibrary[i].pages
        bookRead.textContent = myLibrary[i].read
    }
    
});