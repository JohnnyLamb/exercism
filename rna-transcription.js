var convert = function(string) {

  string = string.split('');
  answer = [];
  var map = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  };

  for (var i = 0; i < string.length; i++) {
    if (map[string[i]]) {
      answer.push(map[string[i]]);
    }

  }
  return answer.join('');

};



module.exports = convert;
