var model = require('./model');
var _ = require('lodash');
const { remove } = require('./model');

exports.findByIdMiddleware = function (req, res, next, id) {
    model.findById(id)
        .then(function (url) {
            if (!url)
                next(new Error('Invalid ID'));
            req.url = url;
            next();
        }, function (err) {
            next(err);
        });
}

exports.getAllUrls = function (req, res, next) {
    model.find({})
        .then(function (urls) {
            res.json(urls);
        }, function (err) {
            next(err);
        });
}

exports.createNewUrl = function (req, res, next) {
    var url = req.body;

    model.create(url)
        .then(function (created) {
            res.json(created);
        }, function (err) {
            next(err);
        })
}

exports.updateUrl = function (req, res, next) {
    var existingUrl = req.url;
    var updatedUrl = req.body;

    _.merge(existingUrl, updatedUrl);

    existingUrl.save()
        .then(function (savedUrl) {
            res.json(savedUrl);
        }, function (err) {
            next(err);
        })
}

exports.deleteUrl = function (req, res, next) {
    req.url.remove()
        .then(function (removed) {
            res.json(removed);
        }, function (err) {
            next(err);
        })
}