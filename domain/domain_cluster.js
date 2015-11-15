var cluster = require('cluster');
var workerCount = require('os').cpus().length;

if(cluster.isMaster){
  //make workers
  for(var i = 0; i < workerCount; i++){
    cluster.fork();
  }

  //if worker dies, create new one
  cluster.on('disconnect', function(worker){
    console.error('Worker down. Creating new one.')
    cluster.fork();
    for(var id in cluster.workers){
      console.log('worker online: ' + id); 
    }
  })
} else {
  var domain = require('domain');
  var http = require('http');

  var server = http.createServer(function(req, res){
    var testDomain = domain.create();
    testDomain.on('error', function(err){
      console.error('ERROR: ', err.stack);
      try{     
        var killTimer = setTimeout(function(){
          process.exit(1)
        }, 3000);
        killTimer.unref();
        server.close();
        cluster.worker.disconnect();
        res.statusCode = 500;
        res.setHeader = ('content-type', 'text/plain');
        res.end('there was a problem with the application')
      } catch(er2) {
        console.error('unable to resolve', er2.stack);  
      }
    })
    testDomain.add(req);
    testDomain.add(res);
    testDomain.run(function(){
      testRequest(req, res)
    });
  });
  server.listen(3000);    
}

function testRequest(req, res) {
  switch(req.url) {
    case '/error':
      fail();
      break;
    default:
      res.end('normal response');
  }
}