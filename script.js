const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const book1 = new Book('ABC', 'Who cares?', 420, true);
const book2 = new Book('XYZ', 'no one gives a f***', 69, false);




function addBookToLibrary() {
    
}

myLibrary.push(book1, book2);

const libraryContainer = document.querySelector('.library-container');


function showForm() {
    document.querySelector('.modal').style.display = 'flex';
}

function displayBooks() {
    const bookTable = document.querySelector('table');
    myLibrary.forEach(book => {
        
        const tableRow = document.createElement('tr');

        const title = document.createElement('td');
        title.textContent = book.title;

        const author = document.createElement('td');
        author.textContent = book.author;

        const pages = document.createElement('td');
        pages.textContent = book.pages;

        const read = document.createElement('td');

        const span = document.createElement('span');
        span.textContent = book.isRead ? 'yes' : 'no';

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        checkBox.checked = span.textContent === 'yes';
        checkBox.onchange = () => {span.textContent =  checkBox.checked ? 'yes':  'no'}

        read.appendChild(span);
        read.appendChild(checkBox);

        const delIcon = document.createElement('td');
        const itag = document.createElement('i');
        itag.classList.add('fas','fa-trash');
        itag.style.cursor = 'pointer';
        
        delIcon.appendChild(itag);

        tableRow.appendChild(title);
        tableRow.appendChild(author);
        tableRow.appendChild(pages);
        tableRow.appendChild(read);
        tableRow.appendChild(delIcon);

        bookTable.appendChild(tableRow);
    })    

}

displayBooks();

