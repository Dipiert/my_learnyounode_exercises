var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dir, function(err, filenames) {
	if (err) {
		console.error(err)	
	} 
    filenames.forEach(function(filename) {
    	if (path.extname(filename) === ext)
			console.log(filename)
    })	
})