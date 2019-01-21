var fs = require('fs');

function display(err,list){
    if(err){
    console.log(err);
    return err;
    }
    else{
        list = list.filter((x) => x.indexOf('.'+process.argv[3]) != -1);
        list.forEach(element => {
            console.log(element); 
        });
        return list;
    }
}

runner=fs.readdir;
runner(process.argv[2],display);

module.exports={runner,display};