// FILTERED LS

var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var extension = '.' + process.argv[3];
fs.readdir(file, function(err, list){
    if(err){
        console.log(err.message);

    }
    list.forEach(function(e){
        if(path.extname(e) === extension){
            console.log(e);
        }
    });

})