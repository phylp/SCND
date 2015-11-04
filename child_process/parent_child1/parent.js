

var spawn = require('child_process').spawn;
var child = spawn('node', ['child.js']);

child.stdin.write('Hey, son.');

child.stdout.on('data', function(data){
  console.log('My kid just told me ' + '"' + data + '"');
  child.kill();
});

child.stderr.on('data', function(data){
  console.log('There was an error: ' + data);
});





