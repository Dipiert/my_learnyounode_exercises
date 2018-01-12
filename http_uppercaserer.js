var http = require('http');
var portNumber = process.argv[2];
var map = require('through2-map')

server = http.createServer(function (req, res) {
	if (req.method !== 'POST') 
		return res.end('send me a POST\n');
	req.pipe(map(function(chunk){
		return chunk.toUpperCase()
	})).pipe(res)
})

server.listen(portNumber);