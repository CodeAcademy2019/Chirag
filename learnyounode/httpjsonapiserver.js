const http = require('http');
const url = require('url');
var fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.method=='GET'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var ob = url.parse(req.url,true);
        var date = new Date(ob.query.iso);
        if(ob.pathname=='/api/parsetime'){
        res.end(JSON.stringify({'hour':date.getHours(),'minute':date.getMinutes(),'second':date.getSeconds()}));
        }else if(ob.pathname=='/api/unixtime'){
            res.end(JSON.stringify({'unixtime':date.getTime()}))
        }

    }
});
server.listen(process.argv[2]);






