var express = require('express');
var setupGlobalMiddleware = require('./middleware/globalMiddleware');
var setupErrorHandler = require('./middleware/errorHandler');
var vanityUrlRouter = require('./api/vanityUrl/router');
var redirectionRouter = require('./api/redirection/router');

var app = express();
setupGlobalMiddleware(app);
app.use('/api/vanityurls', vanityUrlRouter);
app.use('/url', redirectionRouter);
setupErrorHandler(app);

module.exports = app;