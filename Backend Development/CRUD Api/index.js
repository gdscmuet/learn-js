// To run this nodejs app, install all dependencies by typing 'npm install' in root directory i.e. CRUD Api
const express = require('express'); // Express is a javascript library for nodejs. It is used for backend development.
const path = require('path');

const server = express(); // Creating express server

// The form data will be sent in POST request body
// To extract it, we need to use urlencoded() with express as a 'middleware'
//server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.listen(/* port */ 3000, /* callback */ () => {
    console.log('listening on port 3000... navigate to http://localhost:3000/');
});

let books = [
    {id: 1, name: 'Eloquent Javascript', author: 'Marijn Haverbeke', edition: '3rd', price: '5' /* USD */},
    {id: 2, name: 'Effective Java', author: 'Joshua Bloch', edition: '1st', price: '3' /* USD */},
    {id: 3, name: 'Python Workout', author: 'Reuven M. Lerner', edition: '1st', price: '10' /* USD */},
]

server.get(/* route */ '/books', /* callback */ (req, res) => { // Callback can be arrow function or ES5 function
    res.json(books); // json() method sends the data in json format
}); // get() method is used for when a get request is made on a route, here '/books' is the route

server.get('/books/:id', (req, res) => {
    // :id in route name represents request parameters
    let id = req.params.id; // You can access id (request parameter) in 'req.params' object
    id = Number(id); // The id is converted from string to number
    const book = books.find((b) => b.id === id);
    res.json(book);
});

server.delete('/books/:id', (req, res) => {
    let id = req.params.id;
    id = Number(id);
    books = books.filter((b) => b.id !== id);
    res.end()
});

server.post('/books', (req, res) => {
    // In every post, there's data in req.body object
    const book = req.body;
    let newID = books[books.length-1].id + 1; // Always 1 greater than the latest book
    book.id = newID;
    books.push(book);
    res.end();
});

server.put('/books', (req, res) => {
    const book = req.body;
    const index = books.findIndex((b) => b.id == book.id); // Finding the book index
    // return console.log(books[index]);
    books[index] = book; // Replacing the existing book with new book
    res.end();
});

server.get('/', (req, res) => {
    // home route
    const html = path.resolve('./index.html'); // Converts the relative path to absolute path
    res.sendFile(html); // sendFile method is used to send different types of files like html, img, json in response
});