var fs = require('fs');
var inherits = require('util').inherits;
var Transform = require('stream').Transform;

var read = fs.createReadStream('dogs.txt');
var write = fs.createWriteStream('actual_dogs.txt');

function ActualDogs(){
  Transform.call(this); //call Transform constructor 
}
inherits(ActualDogs, Transform) //turns ActualDogs into a transform stream

ActualDogs.prototype._transform = function(chunk, enc, done){
  chunk = chunk.toString().split('\n').filter(function(dog){
    return (dog !== 'dragon')
  }).join('\n');
  this.push(chunk);
  done();
}

read.pipe(new ActualDogs()).pipe(write);