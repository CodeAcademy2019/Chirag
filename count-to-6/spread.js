function prog(){
var s=`The minimum of [${process.argv.slice(2)}] is ${Math.min(...process.argv.slice(2))}`;
console.log(s);
return s;
}
prog();

module.exports=prog;