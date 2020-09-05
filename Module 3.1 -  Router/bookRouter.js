var express = require('express');
var _ = require('lodash');
var router = express.Router();

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
}];

router.param('bookId', function (req, res, next, bookId) {
    var book = books.find(book => book.bookId == bookId);
    if (!book)
        next(new Error('Book not found'));
    req.book = book;
    next();
});

router.get('/', function(req, res) {
    res.json(books);
});

router.get('/:bookId', function(req, res) {
    res.json(req.book);
});

router.post('/', function(req, res, next) {
    var bookId = books.length + 1;
    var book = req.body;
    if (!book || !book.bookName)
        next(new Error('Body doesnt contain book object'));
    book.bookId = bookId;
    books.push(book);
    res.status(201).json(book);
});

router.put('/:bookId', function(req, res) {
    var book = req.book
    var updatedBook = req.body;
    _.merge(book, updatedBook);
    res.json(book);
});

router.delete('/:bookId', function(req, res) {
    var bookId = req.params.bookId;
    books = _.filter(books, (book) => book.bookId != bookId);
    res.status(204).send('Book deleted');
});

module.exports = router;