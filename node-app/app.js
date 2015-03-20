// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello World from Node.js app!!!</h1>\n");
  response.end("<script type=\"text/javascript\">document.write('<h3><a href=\"http://' + location.host + ':8080/\">' + 'Tomcat Application on port 8080</a></h3>');</script>");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
