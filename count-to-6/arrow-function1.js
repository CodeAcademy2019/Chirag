function conc(s,a){
    return s+a;
}

function con(s,a,i,arr){
    if(i==arr.length-1){
        return s.slice(1)+","+a;
    }
    return s+","+a;
}
function prog(){
var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0]).reduce(conc,"");
var input = "[" + inputs.reduce(con,"")+"]";
result=input+" becomes "+"\""+result+"\"";
console.log(result);
return result;
}

prog();

module.exports=prog;