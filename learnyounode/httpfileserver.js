var http = require('http');
var fs = require('fs');

const server = http.createServer((request,response) => {
src = fs.createReadStream(process.argv[3]);
src.pipe(response);
});
server.listen(process.argv[2]);
