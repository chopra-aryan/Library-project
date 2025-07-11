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

myLibrary.push(book1, book2);



function addBookToLibrary(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = event.target.pages.value;
    const readStatus= event.target.readStatus.checked;

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);  

    event.target.reset();
    displayBooks();
    closeModal();
}

const libraryContainer = document.querySelector('.library-container');

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}

function showForm() {
    document.querySelector('.modal').style.display = 'flex';
}

function displayBooks() {
    const bookTable = document.querySelector('table tbody');
    bookTable.innerHTML ="";
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
        span.textContent = book.isRead ? 'Read' : 'Not Read';

        

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        checkBox.checked = span.textContent === 'Read';

        checkBox.style.accentColor = 'green';

        span.style.color = checkBox.checked ? 'green': 'red';

        checkBox.onchange = () => {span.textContent =  checkBox.checked ? 'Read':  'Not Read';
            span.style.color = checkBox.checked ? 'green': 'red';
        }

        read.appendChild(span);
        read.appendChild(checkBox);

        const delIcon = document.createElement('td');
        const itag = document.createElement('i');
        itag.classList.add('fas','fa-trash');
        itag.style.cursor = 'pointer';
        
        itag.onclick = () => {
            const i = myLibrary.findIndex((libraryBook) => libraryBook.id === book.id);
            if (i !== -1) {
                myLibrary.splice(i, 1);
                displayBooks();
            } 
        }

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

