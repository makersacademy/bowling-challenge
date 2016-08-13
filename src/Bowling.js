var BowlingGame = function() {
  this.rolls = [];
  this.scoresArray = [];
  this.rollCounter = 0;
  this.frameCounter = 1;
};

BowlingGame.prototype.roll = function (pins) {
  var game = this;
  function throwAlert() {
    alert('Illegal Score');
  }

  function isIllegalScore() {
    return game.frameCounter % 2 === 0 && (pins + game.scoresArray[game.scoresArray.length - 1] > 10);
  }

  if (isIllegalScore()) {
    throwAlert();
  } else {
    game.rolls.push(pins);
    game.registerRoll(pins)
  }
};

BowlingGame.prototype.registerRoll = function(pins) {
  var game = this;

  function tenthFrame() {
    return game.frameCounter > 18;
  }

  function isStrike() {
    return pins === 10;
  }

  function isFrameEnd() {
    return game.frameCounter % 2 === 0;
  }

  function isSpare() {
    return pins + game.scoresArray[game.scoresArray.length -1] === 10;
  }

  function decideSpare() {
    if (isSpare()) {
      game.scoresArray.push('/');
    } else {
      game.scoresArray.push(pins);
    }
    game.frameCounter++;
  }

  function pushScore() {
    game.scoresArray.push(pins);
  }

  if (tenthFrame()) {
    pushScore();
  } else if (isStrike()) {
    pushScore();
    game.scoresArray.push('X');
    game.frameCounter += 2;
  } else if (isFrameEnd()) {
    decideSpare();
  } else {
    pushScore();
    game.frameCounter++;
  }
  game.rollCounter++;
};

BowlingGame.prototype.score = function (frameNumber) {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for (var i = 0; i < frameNumber; i++) {
    if (isStrike()) {
      result += getStrikeScore();
      rollIndex ++;
    } else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    } else {
      result += getNormalScore();
      rollIndex += 2;
    }
  }
  return result;

  function isStrike() {
    return game.rolls[rollIndex] === 10;
  }
  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }

  function getStrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2] || 0;
  }

  function getSpareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2] || 0;
  }

  function getNormalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] || 0;
  }
};
