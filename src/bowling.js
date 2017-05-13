var Game = function () {
  this.rolls = [];
  this.frameArr = [];
  this.frameError = false;
};

Game.prototype.checkFrameNum = function(pins) {
  if (pins > (10 - (this.frameArr[0]))){
    this.frameError = true;
    // throw new Error("The game has ended");
  }
  else if ((this.frameArr.length === 1) || (pins === 10)) {
    this.frameArr = [];
  }
  else {
    this.frameArr.push(pins);
  }
};

Game.prototype.roll = function(pins) {
  this.checkFrameNum(pins);
  if (this.frameError === true) {
    this.frameError = false;
  }
  else {
    this.rolls.push(pins);
  }
};

Game.prototype.score = function() {
  var score = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (isStrike()) {
        score += getStrikeScore();
        rollIndex++; //only increments by 1 for a strike scenrio
      } else if (isSpare()) {
        score += getSpareScore();
        rollIndex += 2; //increments by 2 because 2 rolls
      } else {
        score += getStandardScore();
        rollIndex += 2 //increments by 2 because 2 rolls
      }
  }
  return score;

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }

  function isStrike() {
    return game.rolls[rollIndex] === 10;
  }

  function getSpareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getStrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getStandardScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }

};
