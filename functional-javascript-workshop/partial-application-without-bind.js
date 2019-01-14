function conc(s,a){
    return s+" "+a;
}

function apply(fn,s){
    return function(...a){
        return fn(s+a.reduce(conc,""));
    }
}

var slice = Array.prototype.slice

    function logger(namespace) {
      var prep=apply(console.log,namespace);
      return prep;
    }

    module.exports = logger