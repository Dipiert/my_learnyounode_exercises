var net = require('net');
var portNumber = process.argv[2];
var server = net.createServer(function listener(socket) {
	data = getDates();	
	socket.end(data);
})

function getDates() {
	var date = new Date();
	var fullYear = date.getFullYear();
	var month = lpad('0', 2, (date.getMonth() + 1).toString());
	var day = lpad('0', 2, (date.getDate()).toString());
	var hours = lpad('0', 2, date.getHours().toString());
	var minutes = lpad('0',2, date.getMinutes());
	var data = fullYear + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
	return data;
}

server.listen(portNumber);

function lpad (padString, length, str) {
    while (str.length < length)
        str = padString + str;
    return str;
}