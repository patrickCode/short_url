var _ = require('lodash');

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


exports.findBookMiddleware = function(req, res, next, bookId) {
    var book = books.find(book => book.bookId == bookId);
    if (!book)
        next(new Error('Book not found'));
    req.book = book;
    next();
}

exports.getAllBooks = function(req, res) {
    res.json(books);
}

exports.getSingleBook = function(req, res) {
    res.json(req.book);
}

exports.addNewBook = function(req, res, next) {
    var bookId = books.length + 1;
    var book = req.body;
    if (!book || !book.bookName)
        next(new Error('Body doesnt contain book object'));
    book.bookId = bookId;
    books.push(book);
    res.status(201).json(book);
}

exports.updateBook = function(req, res, next) {
    var book = req.book
    var updatedBook = req.body;
    _.merge(book, updatedBook);
    res.json(book);
}

exports.deleteBook = function(req, res, next) {
    var bookId = req.params.bookId;
    books = _.filter(books, (book) => book.bookId != bookId);
    res.status(204).send('Book deleted');
}