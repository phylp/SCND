//example of cluster module. A cluster will execute same process multiple times

var cluster = require('cluster');
var http = require('http');
var os = require('os');
var workerLimit = os.cpus().length;


if(cluster.isMaster){
  
  console.log('forking workers...');
  
  for(var i = 0; i < workerLimit; i++){
    cluster.fork();
  }

  cluster.on('online', function(worker){
    console.log(worker.process.pid + ' now  online');
  })
  
  cluster.on('exit', function(worker, code, signal){
    console.log(worker.process.pid + ' now offline')
  })
} else {
  http.createServer(function(req, res){
    res.writeHead(200);
    res.end('response from ' + process.pid) 
  }).listen(3000) 
}




//list of cluster events
//1. 'online' emitted when worker is forked
//2. 'exit' emitted when worker process dies
//3. ''  
