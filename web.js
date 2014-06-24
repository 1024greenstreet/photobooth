var express = require('express');
var http = require('http');
var gzippo = require('gzippo');
var app = express();
//app.use(express.logger());
app.use(gzippo.staticGzip('' + __dirname));
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('index.html', { root: __dirname });
});
var server = http.createServer(app);
server.listen(process.env.PORT || 5000);