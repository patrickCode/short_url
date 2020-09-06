var bodyParser = require('body-parser');
var logger = require('../util/logger');

var globalLogger = function(req, res, next) {
    logger.log(req.url);
    next();
}

module.exports = function(app) {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(globalLogger);
}

