var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var bookRouter = require('./bookRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log("Logger");
    console.log(req.url);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.use('/api/books', bookRouter);

app.use(function (err, req, res, next) {
    console.log("ERROR OCCURRED");
    console.log(err);
    res.status(500).send('OOPS! Some error ocurred.');
});

var port = 3000;
app.listen(port);
console.log(`Server has started on ${port}`);