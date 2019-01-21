var HTTP = require('q-io/http');

const mainFunc= (link) => {
    return HTTP.read(link)//'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')//'http://localhost:12364')
                    .then((ui)=>{ 
                        return HTTP.read(`http://localhost:7001/${ui}`);
                    })
                    .then((a) => {
                        var par=JSON.parse(a);
                        return par;
                    })
                    .then(console.log)
                    .catch((promiseError)=>{
                        console.log(promiseError.message);
                        return promiseError.message;
                    });
}
const promise= mainFunc('http://localhost:7000');
module.exports=mainFunc;