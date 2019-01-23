const http = require('http');

const server = http.createServer((req,res)=>{
    var read='';
    if(req.method==='POST'){
        req.on('data',(s)=>{
            read+=s.toString().toUpperCase();
        });
        req.on('end',()=>{
            res.write(read);
        });
    }
});
server.listen(process.argv[2]);