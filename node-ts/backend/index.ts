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
 
app.listen(3000, () => console.log('server ready'))