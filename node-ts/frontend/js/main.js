let btnAddNewBook = document.getElementById('addNewBook')
let modalWindow = document.getElementById('exampleModal')
let modalWindowTitle = modalWindow.querySelector('#exampleModalLabel')
let modalWindowBody = modalWindow.querySelector('.modal-body')


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

