var logger = require('../util/logger');

module.exports = function(app) {
    app.use(function(err, req, res, next) {
        logger.log(err);
        res.status(500).send('OOPS! Some error ocuurred.')
    });
}