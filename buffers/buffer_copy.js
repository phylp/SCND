//buffer copy method takes target buffer as first argument and byte index as second

var firstBuf = new Buffer('buffers are hard', 'utf8');
console.log('firstBuf: ' + firstBuf.toString());

var secondBuf = new Buffer('easy', 'utf8');
secondBuf.copy(firstBuf, 12);
console.log('firstBuf: ' +  firstBuf.toString());

console.log('firstBuf size: ' + Buffer.byteLength(firstBuf));
