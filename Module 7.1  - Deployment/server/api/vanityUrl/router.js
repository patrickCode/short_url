var controller = require('./controller');
var router = require('express').Router();

router.param('id', controller.findByIdMiddleware);
router.get('/', controller.getAllUrls);
router.post('/', controller.createNewUrl);
router.put('/:id', controller.updateUrl);
router.delete('/:id', controller.deleteUrl);

module.exports = router;