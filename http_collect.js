var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var result = [];
var finished = 0;

for (i in urls) {
	responseCount(i,urls[i]);
}

function responseCount(i, url) {

	http.get(url, function (response) {
		var string = '';
		response.setEncoding('utf8');

		response.on('data', function(chunk){
			string += chunk;
		})

		response.on('end', function() {
			result[i] = string;
			finished++;
			if (finished >= 3) printResult();
		})


	}).on('error', function(error) {
		console.error(error.message);
	})
};

function printResult() {
	for (i in result) console.log(result[i]);
}
