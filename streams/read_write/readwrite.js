var fs = require('fs');
var exec = require('child_process').exec

var readStream = fs.createReadStream('file1.txt');
var writeStream = fs.createWriteStream('file2.txt');

readStream.on('data', function(chunk){
  writeStream.write(chunk);
})


readStream.on('end', function(){
   exec('cat  file2.txt', function(err, stdout, stderr){
    console.log(stdout);  
   })
})

