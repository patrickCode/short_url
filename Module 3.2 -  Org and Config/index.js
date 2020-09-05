var server = require('./server/server');
var logger = require('./server/util/logger');
var config = require('./server/config/configuration');

server.listen(config.port);
logger.log(`Application has started on port ${config.port}`);