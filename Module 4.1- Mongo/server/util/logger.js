var config = require('../config/configuration');

var logger = {
    log: function (msg) {
        if (config.enableLogging)
            console.log(msg);
    }
}

module.exports = logger;