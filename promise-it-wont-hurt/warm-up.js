const msg='TIMED OUT!';

function print(){
    console.log(msg);
    return msg;
}

function runner(){
    setTimeout(print,300);
}

runner();

module.exports={runner,print};