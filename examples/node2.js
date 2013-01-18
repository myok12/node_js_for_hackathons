var http = require('http');

http.createServer(function (request, response) {
    debugger;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello World</h1>\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
