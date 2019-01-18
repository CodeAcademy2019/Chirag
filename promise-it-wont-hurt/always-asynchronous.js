function runner(){
    return new Promise(function (fulfill,reject){
    fulfill('PROMISE VALUE');
});
}
var promise=runner();
promise.then(console.log);
console.log('MAIN PROGRAM');

module.exports=runner;