var mm = require('./mymodule.js');
var fs = require('fs');

function callback(err,data){
    console.log(data);
}

mm('.','txt',callback);