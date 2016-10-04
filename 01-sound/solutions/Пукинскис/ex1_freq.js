var i, j, s, value;
var AMP =10;

for (i=0; i<8000; i++) {
  value = AMP * Math.sin(
    2*Math.PI*i/10
  );
  value = Math.ceil(value);

  s='';
  for (j = -425; j<value; j++) { s+= ' '; }
  s+='*';

  console.log(s);
}

