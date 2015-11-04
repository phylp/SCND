var spawn = require('child_process').spawn;

if(process.argv[2] === 'child'){
  var net = require('net');
  var connector = new net.Socket({fd:3})
  connector.write('killthechild');
} else {
  var child = spawn(process.execPath, [__filename, 'child'], {
    stdio: [null, null, null, 'pipe']
  });
  child.stdio[3].on('data', function(data){
    if(data.toString() === 'killthechild'){
      console.log('but i thought daddy loved me');
      child.kill();
    }
  })
}
