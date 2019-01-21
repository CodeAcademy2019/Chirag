function runner(){
var total=0;
process.argv.slice(2,).forEach(element => {
    total+=+element;
});
console.log(total);
return total;
}

module.exports = runner;
