var os = require('os'); os.tmpDir = os.tmpdir;

var promise = new Promise(function (fulfill, reject) {
    // var error={
    //     message: 'REJECTED!'
    // };
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, 300);
  });
  
  function onReject (error) {
    console.log(error.message);
    return;
  }
  promise.then(null,onReject);
  