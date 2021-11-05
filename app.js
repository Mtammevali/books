//event elements
const form = document.querySelector('form');
const booksList = document.querySelector('#books-list');
//event elements
form.addEventListener('submit', addBook);
booksList.addEventListener('click', deleteBook);
document.addEventListener('DOMContentLoaded', getBookFromLocalStorage);

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    const book = [title, author, isbn];
    // create <tr> element
   const tr = document.createElement('tr');
    for(let i = 0; i<book.length; i++){
        let td = document.createElement('td');
        //creat text element
        let text = document.createTextNode(book[i]);
        // add text to <td>
        td.appendChild(text);
        // add <td> to <tr>
        tr.appendChild(td);
        // add <td> to <tr>
        tr.appendChild(td);

    }
    //x link
    //create <td> element
    td = document.createElement('td')

    // create <a> element
    const link = document.createElement('a');
    // add css class
    link.className = 'secondary-content';
    // set href atribute to <a>
    link.setAttribute('href', '#');
    // add text content to <a>
    link.appendChild(document.createTextNode('X'));
    // add <a> to <li>
    td.appendChild(link);
    // add li to ul
    const ul = document.querySelector('.collection');
    tr.appendChild(td);
    //add tr to tbody
    booksList.appendChild(tr);
    //save task
    addBookToLocalStorage(book);


    titleInput.value = '';
    authorInput.value = '';
    isbn.value = '';

    event.preventDefault();
}
function addBookToLocalStorage(book){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
       books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}



//deleting book
function deleteBook(event){
    const tbody = document.querySelector("tbody");
        if(event.target.textContent === "X"){
            tbody.removeChild(event.target.parentElement.parentElement);
            deleteBookFromLocalStorage(tbody);
        }

}
function deleteBookFromLocalStorage(tbody){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    for(let i = 0; i< books.length; i++){
            let book = books[i];
            if(books[0] === tbody){
                books.splice(i, 1);
            }
    }

    /*books.forEach(function (tasksElement, index){
        if(tasksElement === book){
            books.splice(index, 1);
        }
    });*/
    localStorage.setItem('books', JSON.stringify(books));
}