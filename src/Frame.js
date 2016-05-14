function Frame(firstRoll,secondRoll) {
  var _rolls = [firstRoll, secondRoll];
  var _score = 0;

Frame.prototype.getRoll = function(index) {
  return _rolls[index-1];
};

Frame.prototype.getScore = function() {
  if (firstRoll === 10) {
    _score = 10;
  } else {
    _score = _rolls[0] + _rolls[1];
  }
  return _score;
};



// Frame.prototype.addRoll = function(index, pins) {
//   _rolls[index-1] = pins;
// };

}