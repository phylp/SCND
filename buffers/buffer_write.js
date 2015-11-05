//write method takes value as first argument and byte offset as second

var myBuf = new Buffer('I\'m a node student', 'utf8');

var target = Buffer.byteLength(myBuf) - 'student'.length;

myBuf.write('badass!', target);
console.log(myBuf.toString());

