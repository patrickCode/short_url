var http = require('http');

var server = http.createServer(function(req, res) {
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<html><body><h1>My Node App 1</h1></body></html>")
    res.end();
});

server.listen(3000);