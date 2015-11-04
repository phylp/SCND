var spawn = require('child_process').spawn

var count = 0;
count += 1;

if(process.argv[2] === 'child'){
  console.log('child', count);
} else {
  var child =  spawn(process.execPath, [__filename, 'child'], {
    stdio: 'inherit'
  })
  console.log('parent', count);
}



//prints out 1 two times. Each child exists in its own context.




