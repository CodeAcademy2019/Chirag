const http = require('http');

function callback(res){
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
    console.log(rawData.length);
    console.log(rawData);
    });
}


http.get(process.argv[2],callback);