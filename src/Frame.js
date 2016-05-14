function Frame(firstRoll,secondRoll) {
  var _rolls = [firstRoll, secondRoll];
  var _score = calculateScore(_rolls);
  var type;

Frame.prototype.getRoll = function(index) {
  return _rolls[index-1];
};

Frame.prototype.getScore = function() {

  return _score;
};

Frame.prototype.getType = function() {
  if (firstRoll === 10) {
    type = 'strike';
  } else if (_score === 10) {
    type = 'spare';
  } else {
    type = 'regular';
  }
  return type;
};

function calculateScore(_rolls) {
  var result;
  if (_rolls[0] === 10) {
    result = 10;
  } else {
    result = _rolls[0] + _rolls[1];
  }
  return result;
}


}