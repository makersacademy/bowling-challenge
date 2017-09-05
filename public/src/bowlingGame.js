var BowlingGame = function() {
  this._rolls = [];
  this.currentRoll = 0;
};

BowlingGame.prototype.roll = function(pins) {
  var currentRoll = this.currentRoll;
  var scoreArray = this._rolls;
  var normalRolls = 20;

  function bounsRolls() {
    if(currentRoll < normalRolls){
      return 0
    } else if (scoreArray[19] === 10){
      return 2
    } else if (scoreArray[18] === 10) {
      return 1
    } else if ((scoreArray[18] + scoreArray[19]) === 10) {
      return 1
    }
  };

  function isRollLimit() {
     return currentRoll < (normalRolls + bounsRolls());
   };

  if(isRollLimit()) {
    this._rolls[this.currentRoll] = pins;
    this.currentRoll += 1;
  } else {
    return "Game Over!";
  }
};

BowlingGame.prototype._rolls = function() {
  return this._rolls;
};

BowlingGame.prototype.score = function() {
  var score = 0;
  var frameIndex = 0;
  var game = this._rolls

  function isStrike() {
    return game[frameIndex] === 10
  }

  function StrikeBonus() {
    return game[frameIndex + 1] + game[frameIndex + 2]
  }

  function isASpare() {
    return game[frameIndex] + game[frameIndex + 1] === 10
  }

  function SpareBonus() {
    return game[frameIndex + 2]
  }

  function sumOfAllBallsInTheFrame() {
		return game[frameIndex] + game[frameIndex + 1];
  }

  for (var frame = 0; frame < 10; frame++){
    if(isStrike()) {
      score += 10 + StrikeBonus();
      frameIndex ++;
    } else if(isASpare()) {
      score += 10 + SpareBonus();
      frameIndex += 2;
    }else {
      score += sumOfAllBallsInTheFrame();
      frameIndex += 2;
    }
  }
  return score;
};
