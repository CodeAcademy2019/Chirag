function runner(){
return Promise.reject(new Error('fail'));
}
var promise=runner();

promise.catch((er)=>console.log(er.message));

module.exports=runner;