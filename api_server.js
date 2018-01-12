var http = require('http');
var url = require('url');
var portNumber = process.argv[2];

server = http.createServer(function(req, res){
    var obj = url.parse(req.url, true);
    var date = new Date(obj.query.iso);
    if (obj.pathname.indexOf('unixtime') !== -1) {
        var result = unixtime(date);    
    }
    else {      
        var result = parsetime(date);
    }
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        var json = JSON.stringify(result);
        res.end(json);
    } else {
        res.writeHead(404);
        res.end();
    }   
}) 

function parsetime (date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

function unixtime (date) {
    return {
        unixtime: date.getTime()
    }
}

server.listen(portNumber);