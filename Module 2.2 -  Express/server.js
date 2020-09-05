var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

var books = [{
    bookId: 1,
    bookName: 'Domain Driven Design: Tackling Complexity at the Heart of the Software',
    Authors: ["Eric Evans"]
}, {
    bookId: 2,
    bookName: 'Refactoring',
    Authors: ["Martin Fowler"]
}, {
    bookId: 3,
    bookName: 'Clean Code',
    Authors: ["Bob C. Martin"]
}, {
    bookId: 4,
    bookName: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    Authors: ["Erich Gamma", "Richard Help", "Ralph Johnson", "John Vissides"]
}]

app.get('/api/books', function(req, res) {
    res.json(books);
});

app.get('/api/books/:bookId', function(req, res) {
    var bookId = req.params.bookId;
    var book = books.find(book => book.bookId == bookId);
    if (book)
        res.json(book);
    else
        res.status(404).send("Book not found");
});

app.post('/api/books', function(req, res) {
    var bookId = books.length + 1;
    var book = req.body;
    if (!book)
        res.status(400).send('Bad request');
    book.bookId = bookId;
    books.push(book);
    res.status(201).json(book);
});

var port = 3000;
app.listen(port);
console.log(`Server has started on ${port}`);