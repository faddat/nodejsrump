
var http = require('http');

const port = 3000;

function handleRequest(request, response) {
    response.end('Running on rumprun kernel! Requested url: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log('Server listening on http://localhost:%s', port);
});
