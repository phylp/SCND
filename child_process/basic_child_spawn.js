//this demonstrates how a child process is spawned and executed
//child cannot by default print to stdout because it prints to child.stdout and not process.stdout 

var spawn = require('child_process').spawn;
if(process.argv[2] === 'child'){
  console.log('I am a child');
} else {
  var child = spawn(process.execPath, [__filename, 'child']);
  child.stdout.on('data', function(data){
    console.log('child said :' + data.toString());
  })
}