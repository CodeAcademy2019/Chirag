const err = new Error('REJECTED!');

function runner(){
  return new Promise(function (fulfill, reject) {
    setTimeout(() =>{
      reject(err)}, 300);
  });
}
  function onReject (error) {
    console.log(error.message);
    return error.message
  }
  promise=runner();
  promise.then(null,onReject);
  
  module.exports={runner,onReject};