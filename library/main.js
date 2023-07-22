//books - main div holding all the books
const books = document.querySelector('.books')

const myLibrary = [{
    title: 'Book1',
    author: 'me',
    pages: 500,
    read: true
}, {
    title: 'Book2',
    author: 'you',
    pages: 5000,
    read: false,
}];

function createBookElement(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
}

function createReadElement(bookItem, book) {
    const read = document.createElement("div");
    read.setAttribute("class", "book-read");
    read.appendChild(createBookElement("h1", "Read?", "book-read-title"));
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.addEventListener('click', (e) => {
        if(e.target.checked) {
            bookItem.setAttribute('class', "card book read-checked");
            book.read =true;
    
        } else {
            bookItem.setAttribute("class", "card book read-unchecked");
            book.read = false;
               
        }
    });
    if(book.read) {
        input.checked = true;
        bookItem.setAttribute("class", "card book read-checked");
    }
    read.appendChild(input);
    return read;

}

function createEditIcon(book) {
    return createBookElement("div", null, "");

}

function createIcons() {
    const div = createBookElement("div", "", "icons");


    const icon1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon1.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    icon1.setAttribute("viewBox", "0 0 24 24");
    icon1.setAttribute("width", "20");
    icon1.setAttribute("height", "20");

    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z");

    icon1.appendChild(path);
    div.appendChild(icon1);
  
    return div;
    
}

function createBookItem (book, index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index);
    bookItem.setAttribute('key', index);
    bookItem.setAttribute("class", "card book");
    bookItem.appendChild(
        createBookElement("h1", `Title: ${book.title}`, "book-title")
    );
    bookItem.appendChild(
        createBookElement("h1", `Author: ${book.author}`, "book-author")
    );
    bookItem.appendChild(
        createBookElement("h1", `Pages: ${book.pages}`, "book-pages")
    );
    bookItem.appendChild(createReadElement(bookItem, book));
    bookItem.appendChild(createBookElement("button", "X", "delete"));
    bookItem.appendChild(createIcons())
    bookItem.appendChild(createEditIcon(book))

    books.insertAdjacentElement("afterbegin", bookItem);
}

function renderBooks () {
    myLibrary.map((book, index) => {
        createBookItem(book, index);
    });
}

renderBooks();