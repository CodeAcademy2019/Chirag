module.exports = function arrayMap(arr, fn) {
    res = arr.reduce((res,a) => {res.push(fn(a));
    return res;},[]);
    return res;
}

















