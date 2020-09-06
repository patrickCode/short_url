var express = require('express');
var _ = require('lodash');
var router = express.Router();
var controller = require('./bookController');

router.param('bookId', controller.findBookMiddleware);
router.get('/', controller.getAllBooks);
router.get('/:bookId', controller.getSingleBook);
router.post('/', controller.addNewBook);
router.put('/:bookId', controller.updateBook);
router.delete('/:bookId', controller.deleteBook);

module.exports = router;