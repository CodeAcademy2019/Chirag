var fs = require('fs');

function callback(err,data){
    console.log(data);
}

fs.readdir('.',callback);