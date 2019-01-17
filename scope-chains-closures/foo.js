function foo(){
    var bar=true;
    quux=3;
    function zip(){
        var quux=2;
        bar=false;
        return bar;
    }
    return zip;
}

var z=foo();
var b=z();
console.log(b);