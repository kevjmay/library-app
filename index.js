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
addBookToLibrary('Atomic Habits', 'James Clear', 300, 'No')
console.log(myLibrary)

//Connect myLibrary array to table
const bookshelf = document.querySelector('.bookshelf')
const bookTitle = document.querySelector('.titleC')
const bookAuthor = document.querySelector('.authorC')
const bookPages = document.querySelector('.pagesC')
const bookRead = document.querySelector('.readC')

myLibrary.forEach(() => {
    
    for (i=0; i<myLibrary.length; i++) {
        bookshelf.insertRow()
        bookTitle.textContent = myLibrary[i].title
        bookAuthor.textContent = myLibrary[i].author
        bookPages.textContent = myLibrary[i].pages
        bookRead.textContent = myLibrary[i].read
        document.body.appendChild(bookshelf)
    }
    
});

//New approach to dynamically create the table
const form = document.querySelector('form')
const tbody = document.querySelector('tbody')
const table = document.querySelector('table')
const readStatus = document.querySelector('.readC')

function onAddBook(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    tbody.innerHTML += `
         <tbody>
            <tr>
                <td>${title}</td>
                <td>${author}</td>
                <td>${pages}</td>
                <td class="readCE">${read}</td>
                <td><button class='deleteBtn'>x</button></td>
            </tr>
        </tbody>
    `;

    function addBookToLibrary(title, author, pages, read) {
        const book = new Book(
            this.title = title,
            this.author = author,
            this.pages = pages,
            this.read = read
        )
        return myLibrary.unshift(book)
    }
    addBookToLibrary(title, author, pages, read)

    const newReadStatus = document.querySelector('.readCE')

    function newSwitchStatus() {
        if (newReadStatus.textContent === 'No') {
            newReadStatus.textContent = 'Yes'
        } else {
            newReadStatus.textContent = 'No'
        }
    }
    newReadStatus.addEventListener('click', newSwitchStatus);
}

function onDeleteBook(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
    myLibrary.pop()
}

function switchStatus() {
    if (readStatus.textContent === 'No') {
        readStatus.textContent = 'Yes'
    } else {
        readStatus.textContent = 'No'
    }
}

form.addEventListener('submit', onAddBook);
table.addEventListener('click', onDeleteBook);
readStatus.addEventListener('click', switchStatus);


