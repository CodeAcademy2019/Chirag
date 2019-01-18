function parsePromised(jsob){
    return new Promise(function (fulfill,reject){
        try{
            var res = JSON.parse(jsob);
        }catch(e){
            reject(e.message);
        }
        fulfill(res);
    });
}

var res=parsePromised(process.argv[2]);
res.then(console.log,console.log);

module.exports={parsePromised,res};