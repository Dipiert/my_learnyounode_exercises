var portNumber = process.argv[2];
var read_path = process.argv[3];
var http = require('http');
s
server = http.createServer(function (request,response) {
	response.writeHead(200, { 'content-type': 'text/plain' })
	var src = fs.createReadStream(read_path);
	src.pipe(response);
})

server.listen(portNumber)