function all(prom1,prom2){
    var counter=0;
    var values=[];
    return new Promise(function(fulfill,reject){
        prom1.then((a)=>{
            values.push(a);
            counter++;
            if(counter==2){
                fulfill(values);
            }
        });
        prom2.then((a)=>{
            values.push(a);
            counter++;
            if(counter==2){
                fulfill(values);
            }
        });
        
    });
}

var prom = all(getPromise1,getPromise2);
prom.then(console.log);

module.exports={all,prom};