
var dir = process.argv[2];
var ext = process.argv[3];
var myModule = require('./module.js');

var callback = function (err, list) {
	if (err) throw err;
	list.forEach(function(file) {
		console.log(file);
	})
}

myModule(dir,ext,callback)