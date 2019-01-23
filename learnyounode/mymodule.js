var fs = require('fs');

var path = require('path');


function rdir(a,t,callback){
fs.readdir(a,(err,data)=>{
    if(err){
        callback(err);
    }
    else{
        const filelist = data.filter((x) => path.extname(x)=='.'+t);
        callback(null,filelist);
        return filelist;
    }
});
}

module.exports=rdir;