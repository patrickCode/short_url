var _ = require('lodash');
var bookModel = require('./bookModel');

exports.findBookMiddleware = function (req, res, next, id) {
    bookModel.findById(id)
        .then(function (book) {
            if (!book)
                next(new Error('Book not found'));
            req.book = book;
            next();
        }, function (err) {
            next(err);
        });
}

exports.getAllBooks = function (req, res) {
    bookModel.find({})
        .then(function (books) {
            res.json(books);
        }, function (err) {
            next(err);
        });
}

exports.getSingleBook = function (req, res) {
    res.json(req.book);
}

exports.addNewBook = function (req, res, next) {
    var book = req.body;
    if (!book || !book.bookName)
        next(new Error('Body doesnt contain book object'));
    bookModel.create(book)
        .then(function (newBook) {
            res
                .status(201)
                .json(newBook)
        }, function (err) {
            next(err);
        });
}

exports.updateBook = function (req, res, next) {
    var book = req.book
    var updatedBook = req.body;
    _.merge(book, updatedBook);

    book.save()
        .then(function (savedBook) {
            res.json(savedBook);
        }, function (err) {
            next(err);
        });
}

exports.deleteBook = function (req, res, next) {
    var id = req.params.id;
    req.book.remove()
        .then(function (removed) {
            res.status(204).send('Book deleted');
        }, function (err) {
            next(err);
        });
}