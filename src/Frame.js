function Frame(firstRoll,secondRoll) {
  'use strict';
  var _rolls = [firstRoll, secondRoll];
  var _score = calculateScore();
  var _type = calculateType();


  Frame.prototype.getRoll = function(index) {
    return _rolls[index-1];
  };

  Frame.prototype.getScore = function() {
    return _score;
  };

  Frame.prototype.getType = function() {
    return _type;
  };

  function calculateType() {
    if (firstRoll === 10) {
      _type = 'strike';
      _rolls[1] = "-";
    } else if (_score === 10) {
      _type = 'spare';
    } else {
      _type = 'regular';
    }
    return _type;
  }

  function calculateScore() {
    var result;
    if (_rolls[0] === 10) {
      result = 10;
    } else {
      result = _rolls[0] + _rolls[1];
    }
    return result;
  }
}