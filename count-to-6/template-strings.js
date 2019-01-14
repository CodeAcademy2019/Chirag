function prg2(){
    var name = process.argv[2];
    var lowerName = name.toLowerCase();
    var sol = `Hello, ${name}!\nYour name lowercased is "${lowerName}".`
    console.log(sol)
    return sol;
}

prg2();

module.exports = prg2;