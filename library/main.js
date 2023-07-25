//books - main div holding all the books
const books = document.querySelector('.books');

// add book button
const addBook = document.querySelector(".add-book");

// add/edit book modal
const modal = document.querySelector("#modal");

// this is the x button to close a modal
const span = document.querySelector(".close");

// array of books
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

// helper function to create html elements with textcontent and classes
function createBookElement(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
}

// helper function to create an input with event listerner for if a book is read
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

// create the edit icon w/ event listener
function createEditIcon(book) {
    const pathData = "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";
    const width = "20";
    const height = "20";
    
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("width", width);
    icon.setAttribute("height", height);
  
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    icon.appendChild(path);
  
    return icon; // Return only the icon element
  }

function createSVGIcons(pathData, width, height) {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("width", width);
    icon.setAttribute("height", height);
  
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    icon.appendChild(path);
  
    return [icon, path]; // Return both the icon container and the path element
  }

  function createIcons() {
    const div = createBookElement("div", "", "icons");
    const icon1 = createSVGIcons("M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z", "20", "20");
    const icon2 = createSVGIcons("M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z", "20", "20");
    const icon3 = createSVGIcons("M13,14C9.64,14 8.54,15.35 8.18,16.24C9.25,16.7 10,17.76 10,19A3,3 0 0,1 7,22A3,3 0 0,1 4,19C4,17.69 4.83,16.58 6,16.17V7.83C4.83,7.42 4,6.31 4,5A3,3 0 0,1 7,2A3,3 0 0,1 10,5C10,6.31 9.17,7.42 8,7.83V13.12C8.88,12.47 10.16,12 12,12C14.67,12 15.56,10.66 15.85,9.77C14.77,9.32 14,8.25 14,7A3,3 0 0,1 17,4A3,3 0 0,1 20,7C20,8.34 19.12,9.5 17.91,9.86C17.65,11.29 16.68,14 13,14M7,18A1,1 0 0,0 6,19A1,1 0 0,0 7,20A1,1 0 0,0 8,19A1,1 0 0,0 7,18M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M17,6A1,1 0 0,0 16,7A1,1 0 0,0 17,8A1,1 0 0,0 18,7A1,1 0 0,0 17,6Z", "20", "20");
    const editIcon = createSVGIcons("M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z", "20", "20");
  
    div.appendChild(icon1[0]); // Append the SVG container
    div.appendChild(icon2[0]);
    div.appendChild(icon3[0]);
    div.appendChild(editIcon[0]);
  
    return div;
  }

function deleteBook(index) {
    myLibrary.splice(index, 1)
    renderBooks();
}

// Function to create all of the book content on the book dom card
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
    
    const editIconContainer = document.createElement("div");
    editIconContainer.appendChild(createEditIcon(book));
    //bookItem.appendChild(editIconContainer); 
    bookItem.appendChild(createIcons());
    //bookItem.appendChild(createEditIcon(book));
    
   


    
    books.insertAdjacentElement("afterbegin", bookItem);
}


// Function to render all the books
function renderBooks () {
    books.textContent = "";
    myLibrary.map((book, index) => {
        createBookItem(book, index);
    });
}

// Render on page load
renderBooks();