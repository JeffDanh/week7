// MY FIRST I/O!
var fs = require('fs');

var read = fs.readFileSync(process.argv[2]);
var str = read.toString().split('\n').length - 1;
console.log(str);