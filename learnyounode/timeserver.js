const net = require('net');
// var date = new date('2013-07-06 17:42');

function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = '' + d.getHours(),
        min = '' + d.getMinutes();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if(hour.length<2) hour = '0' + hour;
    if(min.length<2) min = '0' + min;

    return [year, month, day].join('-')+' '+hour+':'+min+'\n';
}

const server = net.createServer((socket) => {
    socket.write(formatDate());
    socket.end();
});
server.listen(process.argv[2]);