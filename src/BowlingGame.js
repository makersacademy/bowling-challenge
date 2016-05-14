function BowlingGame() {

  var _total_score = 0;
  var _rolls = [];
  var ROLLS_Length = 21;
  var FRAMES_Length = 10;
  var currentRoll = 0;

  BowlingGame.prototype.begin = function() {
    for(var i=0;i<ROLLS_Length;i++) {
      _rolls[i] = 0;
    }
  };

  BowlingGame.prototype.total_score = function(){
    return _total_score;
  };

  BowlingGame.prototype.roll = function(pins) {
    setRoll[currentRoll++] = pins;
    if (isStrike(pins)) {
      currentRoll++;
    }
    for (var i=0;i<FRAMES_Length;i++) {
      var a;
    }
    _total_score += pins;
  };

  function setRoll(index, pins) {
    _rolls[index] = pins;
  }

  function isStrike(frame, pins) {
    return pins === 10;
  }
}