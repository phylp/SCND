var spawn = require('child_process').spawn;
var child = spawn('node', ['child_test.js']);

function makeMeProudJunior(num){
  child.stdin.write(num.toString());
}

var i = 2;
setInterval(function(){
  makeMeProudJunior(i++)
}, 1000)

setInterval(function(){
  console.log('Today, Junior!')
}, 250)

child.stdout.on('data', function(data){
  console.log('--My kid said ' + data.toString() + '--is a prime number');
});

child.stderr.on('data', function(data){
  console.log('there was an error');
});