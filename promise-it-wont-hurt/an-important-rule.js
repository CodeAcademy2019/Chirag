function alwaysThrows(){
    throw new Error('OH NOES');
    
}

function iterate(a){
    console.log(a);
    return a+1;
}

function rej(err){
    console.log(err.message);
    // alwaysThrows();
}

function runner(){
return Promise.resolve(1);
}
var res=runner();
res.then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).then(null,rej);
module.exports={runner,iterate};
