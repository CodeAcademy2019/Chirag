'use strict';
var os = require('os'); os.tmpDir = os.tmpdir;
var promise = new Promise(function (fulfill, reject) {
      setTimeout(()=>{fulfill('FULFILLED!')},300);
});
promise.then(s => console.log(s));