var
  fs = require('fs'),
  fd = fs.openSync('./test.raw', 'w'),
  b  = new Buffer(1000),
  i = 0;

while (i < b.length) {
  b[i] = i;
  i++;
}

fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);
