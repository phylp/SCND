//basic example of the domain module. 
var domain = require('domain');
var testDomain = domain.create();

function handleError(err){
  console.log('here we got an error: ', err);
  console.log('exiting...')
  setTimeout(function(){
    process.exit(1);
  }, 2000)
}

testDomain.on('error', handleError);

//anything that is executed in run scope will be handled by the domain 
testDomain.run(function(){
  console.log('running smoothly but...');
  fail();  
});

