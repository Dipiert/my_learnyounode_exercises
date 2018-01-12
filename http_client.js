require('http').get(process.argv[2], function callback (response) {
	response.setEncoding('utf8');
	response.on("data", console.log);
	response.on("data", console.error);
}).on("error", console.error);