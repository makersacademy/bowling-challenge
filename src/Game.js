function Game() {
  this._frames = [];
  var _totalScore = 0, _rolls = [], currentRoll = 0;

  Game.prototype.begin = function() {
    for(var i=0;i<21;i++) {
      _rolls[i] = 0;
    }
  };

  Game.prototype.totalScore = function(){
    return _totalScore;
  };

  Game.prototype.roll = function(pins) {
    _rolls[currentRoll++] = pins;
    if (pins === 10) {   // strike, second roll of frame not played
      _rolls[currentRoll++] = "-";
    }
  };

  Game.prototype.calculateFrameScore = function(currentRoll){
    var frameScore = 0;
    var frameIndex = Math.round(currentRoll/2)
     if (isSpare(frameIndex)) {
      this._frames[frameIndex] = 'spare';
    } else {
      this._frames[frameIndex] = _rolls[currentRoll] + _rolls[currentRoll-1]
    }
    if (this._frames[frameIndex-1] === 'spare') {
      this._frames[frameIndex-1] = 10 + _rolls[currentRoll];
      calculateCumulative(frameIndex-1);
    }

  };

  function isStrike(frame, pins) {
    return pins === 10;
  }

  function isSpare(frameIndex) {
    return (_rolls[frameIndex] + _rolls[frameIndex+1]) === 10;
  }

  function isregularFrame(frameIndex) {
    return !(isStrike(frameIndex) || isSpare(frameIndex));
  }

  function calculateCumulative(index) {
    if (index > 0) {
      _frames[index] += frames[index-1];
    }
  }
}