    var slice = Array.prototype.slice

    function logger(namespace) {
      return function (){
           console.log.apply(null,[namespace].concat(Object.values(arguments))); //arguments cannot be called inside a arrow-function;
      }
    }
    
    logger();
    
    module.exports = logger