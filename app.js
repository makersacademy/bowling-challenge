// A very basic web server in node.js
// Stolen from: Node.js for Front-End Developers by Garann Means (p. 9-10)

var port = 8000;
var serverUrl = "localhost";

var http = require("http");
var path = require("path");
var fs = require("fs");

console.log("Starting web server at " + serverUrl + ":" + port);

http.createServer( function(req, res) {

    var now = new Date();

    var filename = req.url || "index.html";
    var ext = path.extname(filename);
    var localPath = __dirname;
    var validExtensions = {
        ".html" : "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".txt": "text/plain",
        ".jpg": "image/jpeg",
        ".gif": "image/gif",
        ".png": "image/png",
        ".ico": "image/png"
    };
    var isValidExt = validExtensions[ext];

    if (isValidExt) {
        localPath += filename;

        fs.exists(localPath, function(exists) {
            if(exists) {
                console.log("Serving file: " + localPath);
                getFile(localPath, res, validExtensions[ext]);
            } else {
                console.log("File not found: " + localPath);

                if(ext === 'text/html'){
                    getFile(__dirname + '/404.html', res, ext);
                }
            }
        });

    } else {
         console.log("Invalid file extension detected: " + ext)
         getFile(__dirname + '/index.html', res, 'text/html');
    }

}).listen(port, serverUrl);

function getFile(localPath, res, mimeType) {
    fs.readFile(localPath, function(err, contents) {
        if(!err) {
            res.setHeader("Content-Length", contents.length);
            res.setHeader("Content-Type", mimeType);
            res.statusCode = 200;
            res.end(contents);
        } else {
            res.writeHead(500);
            res.end();
        }
    });
}
