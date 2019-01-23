var mm = require('./mymodule.js');

function callback(err,data){
    if(err){
        console.log(err.message);
    }else{
        data.forEach((x)=>{console.log(x)});
    }
}

mm(process.argv[2],process.argv[3],callback);



