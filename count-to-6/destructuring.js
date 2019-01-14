function prog(){
let userArray = process.argv.slice(2);
var ob = {};
[ob.username,ob.email] = userArray.slice(1,3);
console.log(ob);
return ob;
}

prog();

module.exports=prog;
