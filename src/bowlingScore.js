function bowlingScore() {
  this.rolls = [];
  game = this;
};

bowlingScore.prototype.roll = function(pins) {
  this.rolls.push(pins);
  this.framesScore();
};

bowlingScore.prototype.score = function() {
  var score = 0;
  for(i=0; i<=this.frames.length; i++) {
    if(!isNaN(this.frames[i])) score += this.frames[i];
  }
  return score;
};

bowlingScore.prototype.framesScore = function() {
  this.frames = []
  lastFrameRoll = 1;
  calcFrames()
};

function calcFrames() {
  for(roll=0; roll<game.rolls.length;) {
    if (isLastFrame()) {
      getLastFrameScore();
    } else if (isStrike()) {
      getStrikeScore();
    } else if (isSpare()) {
      getSpareScore();
    } else {
      getNormalScore();
    };
    if (gameIsOver()) break;
  }
}

function getNormalScore() {
  game.frames.push(setNormal());
  roll += 2;
}

function setNormal() {
  return game.rolls[roll] + game.rolls[roll+1];
}

function isSpare() {
  return game.rolls[roll] + game.rolls[roll+1] === 10
}

function getSpareScore() {
  game.frames.push(setBonus());
  roll += 2;
}

function isStrike() {
  return game.rolls[roll] === 10
}

function getStrikeScore() {
  game.frames.push(setBonus());
  roll++;
}

function setBonus() {
  return game.rolls[roll] + game.rolls[roll+1] + game.rolls[roll+2]
};

function isLastFrame() {
  return game.frames.length >= 9;
}

function getLastFrameScore() {
  game.frames[9] = game.frames[9] || 0;
  game.frames[9] += game.rolls[roll];
  lastFrameRoll ++;
  roll++;
}

function noBonus() {
  return game.rolls[roll-1] + game.rolls[roll-2] < 10
}

function gameIsOver() {
  return lastFrameRoll > 3 || lastFrameRoll > 2 && noBonus()
}
