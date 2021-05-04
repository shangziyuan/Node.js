var http = require('http');
var https = require('https');
var fs = require('fs');

var httpsOptions = {
    key: fs.readFileSync('/home/ubuntu/conf/ca-key.pem'),
    cert: fs.readFileSync('/home/ubuntu/conf/ca-cert.pem')
};

var app = function (req, res) { 
    res.writeHead(200);
    res.end("hello world\n");
}

http.createServer(app).listen(80);
https.createServer(httpsOptions, app).listen(443);