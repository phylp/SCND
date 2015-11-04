//everything (including this comment) will print to the terminal

var exec = require('child_process').exec;

exec('cat childprocess.js', function(err, stdout, stderr){
  console.log('here is the catted file', stdout);
})
