function c(total,a){
    if(Object.prototype.hasOwnProperty.call(a, 'quack')){
        return total+1;
    }
    return total;
}

function duckCount(...s) {
var res=0;
res=s.reduce(c,0);
return res;
  }

  module.exports = duckCount