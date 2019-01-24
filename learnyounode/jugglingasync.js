const http = require('http');

let display=[];
let count=0;

const print = () => {
    count+=1;
    if(count === 3){
        display.forEach((element)=>{
            console.log(element);
        });
    }
};
http.get(process.argv[2],(res) => {
    res.setEncoding('utf8');
    let data ='';
    res.on('data',(s)=>{
        data += s;
    });
    res.on('end', () => {
        display[0] = data;
        print();
    });
});
http.get(process.argv[3],(res) => {
    res.setEncoding('utf8');
    let data ='';
    res.on('data',(s)=>{
        data += s;
    });
    res.on('end', () => {
        display[1] = data;
        print();
    });
});
http.get(process.argv[4],(res) => {
    res.setEncoding('utf8');
    let data = '';
    res.on('data',(s)=>{
        data += s;
    });
    res.on('end', () => {
        display[2] = data;
        print();
    });
});
