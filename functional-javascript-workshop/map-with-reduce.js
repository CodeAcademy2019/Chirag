function r(t,a){
    t=t.push(t[0](a));
    return t;
}

module.exports = function arrayMap(arr, fn) {
    var res=[];
    //var r=app.bind(null,fn);
    console.log(fn(arr[0]));
    res=arr.reduce(r,[fn]);
    return res.slice(1);
  }

















