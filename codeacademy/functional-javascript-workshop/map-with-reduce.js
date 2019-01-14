function app(fn,t,a){
    return t.push(fn(a));
}

module.exports = function arrayMap(arr, fn) {
    var res=[];
    var r=app.bind(null,fn);
    res=arr.reduce(r,[]);
    return res;
  }

















