var promise=Promise.reject(new Error('fail'));

promise.catch((er)=>console.log(er.message));
