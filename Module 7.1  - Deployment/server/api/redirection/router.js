var controller = require('./controller');
var router = require('express').Router();

router.get('/:key', controller.redirect);

module.exports = router;