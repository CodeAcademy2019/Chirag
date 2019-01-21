var fs = require('fs');

function runner(){
var buf = fs.readFileSync(process.argv[2]);
buf = buf.toString();
var count=0;
for(var i=0;i<buf.length;i++){
    if(buf[i]==='\n')
    count++;
}
console.log(count);
return count;
}

module.exports = runner;