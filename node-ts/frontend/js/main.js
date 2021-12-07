let btnAddNewBook = document.getElementById('addNewBook')
let modalWindow = document.getElementById('exampleModal')
let modalWindowTitle = modalWindow.querySelector('#exampleModalLabel')
let modalWindowBody = modalWindow.querySelector('.modal-body')
let bookTitle = undefined;
let bookDescription = undefined;

let btnSaveChanges = document.getElementById('btnSaveChanges')

btnSaveChanges.addEventListener('click', event => {
    let form = document.getElementById('frmBook')
    
    var data = new FormData(form);
    let tmp = []
    for (var [input, value] of data) {
        //console.log(input, value)
        tmp[input] = value
    }
    let frmData = Object.assign({}, tmp)
    console.log(frmData)
    // step 2
    fetch('http://localhost:3000/newbook', {
        method: 'POST', 
        mode: 'no-cors',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(frmData) // {"a": 1, "b": "Textual content"}
    })
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        console.log(data.result)
    })
})


btnAddNewBook.addEventListener('click', event => {
    $('#exampleModal').modal('show')
})

// jQuery event
$('#exampleModal').on('show.bs.modal', function (event) {
    // do something...
    console.log('modal window is fired')
    fetch('../frontend/form.html')
    .then(response => response.text())
    .then(form => {
        modalWindowTitle.innerText = 'New Book'
        modalWindowBody.innerHTML = form
    })
})

function generateCard(){
    return `<div class="card m-3" style="width: 18rem;float: left;">
    <div class="card-body">
        <h5 class="card-title">${ bookTitle }</h5>
        <p class="card-text">${ bookDescription }</p>
        <a href="#" class="btn btn-primary">Edit</a>
        <a href="#" class="btn btn-danger">Delete</a>
        </div>
    </div>`
}

window.addEventListener('DOMContentLoaded', event => {
    //console.log('body loaded')

    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let booksList = document.getElementById('books')
            booksList.innerHTML = ''
            data.forEach(book => {
                bookTitle = book.title
                bookDescription = `(isbn: ${ book.isbn})<br> 
                <i>Description ${ book.description } </i><br>
                <b>Author: ${ book.author } </b> <br>
                Year: ${ book.year}
                ` 
                booksList.innerHTML += generateCard()

            })
        })
})

