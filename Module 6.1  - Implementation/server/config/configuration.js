var _ = require('lodash');

var config = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    enableLogging: process.env.ENABLE_LOGGING || true
};

var envConfig = require('./configuration.' + config.environment) || {};
_.merge(config, envConfig);

module.exports = config;
