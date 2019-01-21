var fs = require('fs');

function display(err,data){
    var nl=0
    if(err){
    console.log(err);
    return err;
    }
    else{
        console.log(nl=data.split('\n').length-1);
        return nl;
    }
}

runner=fs.readFile;
runner(process.argv[2],'utf8',display);


module.exports={runner,display};