import { IBook } from './IBook'

const express = require('express')
const app = express()

//app.use(express.json()) // for parsing application/json
app.use(express.json({type: '*/*'}));
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let books:IBook[] = [
    {
        isbn:1111,
        title:'Title 1',
        description:'Description 1',
        author:'Author 1',
        year: 2000
    },
    {
        isbn:2222,
        title:'Title 2',
        description:'Description 2',
        author:'Author 2',
        year: 2002
    },
    {
        isbn:3333,
        title:'Title 3',
        description:'Description 3',
        author:'Author 3',
        year: 2003
    }
]


app.get('/', function (req, res) {
  res.send('Hello World')
})

// method: GET, POST
app.get('/books', function (req, res) {
    res.send(books)
})

app.get('/books/:isbn', function (req, res) {
    
    console.log("get book with isbn: " + req.params.isbn)
    let bookFound:IBook = {isbn:0,title:'',description:'',author:'',year:0}
    books.forEach(book => {
        if (book.isbn == req.params.isbn){
            bookFound = book
        }
    })
    res.status(200).json(bookFound)
})

app.put('/edit', function (req, res) {
    let isbn = 1111

    books.forEach(book => {
        if (book.isbn == isbn)
        {
            book.title = ''
            book.description = ''
            book.author = ''
            book.year = 0
        }
    })

    res.status(200).send('ok')

})

app.post('/newbook', function (req, res) {
    console.log(req.body)
    
    books.push(req.body)

    let response = {
        status: 200,
        result: 'Book is added successfully',
        options: {}
    }
    //res.status(301).send(response)
    res.send(books)
})

app.delete('/delete/:isbn', function (req, res) {
    console.log("delete fn, isbn: " + req.params.isbn)
    let bookDeleted:IBook[] = []
    books.forEach((book, index) => {
        if (book.isbn == req.params.isbn){
            bookDeleted = books.splice(index, 1)
        }
    })
    res.status(200).json({result: 'deleted', deleted: bookDeleted})
})
 
app.listen(3000, () => console.log('server ready ...'))