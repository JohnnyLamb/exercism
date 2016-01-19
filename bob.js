var Bob = function() {};

Bob.prototype.hey = function(input) {

  if(!input.match(/\S/)){
    return 'Fine. Be that way!';
  }
  if(!input.match(/[a-z]/)){
    return 'Woah, chill out!';
  }
  if(!input.match(/[^?]$/)){
    return 'Sure.';
  }
  else {
    return 'Whatever.';
  }

};



module.exports = Bob;




