var fs = require('fs')
var buf = fs.readFile(process.argv[2], 'utf8', function(err,fileContents) {
	if(err) console.log(err);
	var lines = fileContents.split('\n')
	console.log(lines.length - 1)
})
