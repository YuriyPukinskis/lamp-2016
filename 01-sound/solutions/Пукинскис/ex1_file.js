var i, j, s, value;
var AMP =10;


var
  fs = require('fs'),
  fd = fs.openSync('./test.raw', 'w'),
  b  = new Buffer(4000),
  i = 0;

while (i < b.length) {
  for (i=0; i<8000; i++) {
  value = AMP * Math.sin(
    2*Math.PI*i/10000
  );
  b[i] = Math.ceil(value);}
  i++;
}

fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);
