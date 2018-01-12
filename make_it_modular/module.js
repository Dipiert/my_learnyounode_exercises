var fs = require('fs')
var path = require('path')

function printFiles(dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) {
            return callback(err)
        }
        else {
            list = list.filter(function (file), filterCondition));
            return callback(null,list);
        }
    })
}

function filterCondition(file) {
    if (path.extname(file) === '.' + ext) return true;
}
module.exports = printFiles;