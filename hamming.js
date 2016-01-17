var compute = function(a, b) {
  if (a === b) {
    return 0;
  }
  a = a.split('');
  b = b.split('');
  count = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;

    } else if (a.length !== b.length) {
      throw Error('DNA strands must be of equal length.');
    }
  }
  return count;

};



module.exports = compute;
