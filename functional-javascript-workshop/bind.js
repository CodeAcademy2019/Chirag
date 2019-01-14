function conc(t,a){
    return t+" "+a;
}

function fn(n,...a){
    console.log(n+a.reduce(conc,""));
    return;
}

module.exports = function(namespace) {
    return fn.bind(null,namespace);
  }