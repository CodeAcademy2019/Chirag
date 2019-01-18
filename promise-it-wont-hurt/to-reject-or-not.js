function runner(){
    return new Promise(function (fulfill,reject){
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});
}

function onRejected(error){
    console.log(error.message);
    return;
}

var temp=runner();
temp.then(console.log,onRejected);

module.exports={runner,temp};