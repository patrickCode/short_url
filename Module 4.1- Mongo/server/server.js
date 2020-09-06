var express = require('express');
var setupGlobalMiddleware = require('./middleware/globalMiddleware');
var setupErrorHandler = require('./middleware/errorHandler');
var bookRouter = require('./api/book/bookRouter');

var app = express();
setupGlobalMiddleware(app);
app.use('/api/books', bookRouter);
setupErrorHandler(app);

module.exports = app;