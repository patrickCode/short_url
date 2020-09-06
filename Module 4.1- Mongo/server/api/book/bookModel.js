var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
        unique: false
    },
    authors: {
        type: Array
    }
});

var model = mongoose.model('book', bookSchema, 'books');
module.exports = model;