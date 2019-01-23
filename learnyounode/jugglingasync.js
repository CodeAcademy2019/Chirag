var http = require('http');

function print(){
    count++;
    if(count==3){
        display.forEach(console.log);
    }
    return;
}

const display=['','',''];
var count=0;

http.get(process.argv[2],(res) => {
    res.setEncoding('utf8');
    res.on('data',(s)=>{
        display[0]+=s;
    });
    res.on('end',print);
});
http.get(process.argv[3],(res) => {
    res.setEncoding('utf8');
    res.on('data',(s)=>{
        display[1]+=s;
    });
    res.on('end',print);
});
http.get(process.argv[4],(res) => {
    res.setEncoding('utf8');
    res.on('data',(s)=>{
        display[2]+=s;
    });
    res.on('end',print);
});
