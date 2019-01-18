function first(){
    return new Promise(function(fulfill,reject){
        fulfill('first');
    });
}

function second(){
    return new Promise(function(fulfill,reject){
        fulfill('second');
    });
}

var prom1=first();
var prom2=prom1.then(second);
prom2.then(console.log);
module.exports={first,prom1,prom2};
