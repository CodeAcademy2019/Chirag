function promise(){
    return new Promise(function (fulfill, reject) {
      setTimeout(()=>{fulfill('FULFILLED!')},300);
});
}
promise().then((s) => console.log(s));

module.exports=promise;