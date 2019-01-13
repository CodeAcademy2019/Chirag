module.exports = function average(...args) {
    var res=0;
    args.forEach(function (value){
        return res+=value;
    });
    return res/args.length;
};