function attachTitle(s){
    return 'DR. '+s;
}

function runner(){
    return new Promise(function(fulfill,reject){
    fulfill('MANHATTAN');
});
}

var promise=runner();
var s=promise.then(attachTitle);
s.then(console.log);

module.exports={runner,attachTitle,s};