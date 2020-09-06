var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VanityUrlSchema = new Schema({
    vanityKey: {
        type: String,
        required: true,
        unique: true
    },
    originalUrl: {
        type: String,
        required: true,
        unique: false
    },
    createdBy: {
        type: String,
        required: true,
        unique: false
    }
});

var model = mongoose.model('vanityUrl', VanityUrlSchema, "urls");
module.exports = model;