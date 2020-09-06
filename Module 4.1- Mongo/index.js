var server = require('./server/server');
var logger = require('./server/util/logger');
var config = require('./server/config/configuration');
var mongoose = require('mongoose');


mongoose.connect(config.mongoDbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
logger.log(`Connected to Mongo DB`);

server.listen(config.port);
logger.log(`Application has started on port ${config.port}`);