let btnAddNewBook = document.getElementById('addNewBook')
let modalWindow = document.getElementById('exampleModal')
let modalWindowTitle = modalWindow.querySelector('#exampleModalLabel')
let modalWindowBody = modalWindow.querySelector('.modal-body')
let bookTitle = undefined;
let bookDescription = undefined;
let bookIsbn = 0
let currentBookIsbn = 0

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
        method: 'post', 
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(frmData) // {"a": 1, "b": "Textual content"}
    })
    .then(response => {
        console.log( response.body)
        if (response.status == 0)
        {
            console.log('Error occured. No server json data')
        } else if (response.status == 200){
            return response.json()
        } else if (response.status == 301){
            console.log("Moved permanently")
        } else {
            return response.text()
        }
    })
    .then(data => {
        //console.log(data)
        if (data.result != 'undefined')
        {
            console.log(data.result)
        } else {
            console.log('No data. data:' + data)
        }
    });
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

        if (currentBookIsbn != 0)
        {
            fetch('http://localhost:3000/books/' + currentBookIsbn, 
            {
                method: 'GET' // REST api
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                
                let form = document.getElementById('frmBook')
                //var data = new FormData(form);
                Array.from(form.elements).forEach(input => {
                    input.value = data.title // todo 
                })
            })
        }
    })
})

function generateCard(){
    return `<div class="card m-3" style="width: 18rem;float: left;">
    <div class="card-body">
        <h5 class="card-title">${ bookTitle }</h5>
        <p class="card-text">${ bookDescription }</p>
        <a href="#" class="btn btn-primary btnEdit" data-bookIsbn="${ bookIsbn }">Edit</a>
        <a href="#" class="btn btn-danger btnDelete" data-bookIsbn="${ bookIsbn }">Delete</a>
        </div>
    </div>`
}

let getData = () => 
{
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
                bookIsbn = book.isbn
                booksList.innerHTML += generateCard()
            })

            // get all delete buttons
            let btnsDelete = document.querySelectorAll('.btnDelete')
            console.log(btnsDelete)
            btnsDelete.forEach(btn => {
                console.log(btn)
                btn.addEventListener('click', event => {
                    console.log(event.target.dataset.bookisbn)
                    fetch('http://localhost:3000/delete/' + event.target.dataset.bookisbn, 
                    {
                        method: 'DELETE' // REST api
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        if (data.result == 'deleted')
                        {
                            getData()
                        }
                    })
                })
            })


            // get all delete buttons
            let btnsEdit = document.querySelectorAll('.btnEdit')
            console.log(btnsEdit)
            btnsEdit.forEach(btn => {
                console.log(btn)
                btn.addEventListener('click', event => {
                    console.log(event.target.dataset.bookisbn)
                    currentBookIsbn = event.target.dataset.bookisbn
                    $('#exampleModal').modal('show')
                    
                })
            })
        })
}


window.addEventListener('DOMContentLoaded', event => {
    //console.log('body loaded')
    getData()
})

