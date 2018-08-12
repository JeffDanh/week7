// MY FIRST ASYNC I/O!

var fs = require('fs');
var read = fs.readFile(process.argv[2], 'utf8', function(err, data){
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data.toString().split('\n').length -1);
    }
});




// var fs = require('fs')
//     var file = process.argv[2]
    
//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })