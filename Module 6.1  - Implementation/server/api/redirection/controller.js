var vanityUrl = require('../vanityUrl/model');

exports.redirect = function (req, res, next) {
    var key = req.params.key;
    vanityUrl.findOne({vanityKey: key})
        .then(function(model) {
            if (model == null)
                next(new Error('Invalid Key'));
            //res.json(model);
            //console.log(model);
            //console.log(model.originalUrl);
            res.setHeader('Location', model.originalUrl);
            res.status(301);
            res.send();
        }, function(err) {
            next(err);
        })
}