function Game() {
  this.scoreBoard = [];
  for(i=0; i<10; i++) this.scoreBoard[i]={rolls: [], frameTotal: 0};
  this.frameNum = 0;
  this.rollNum = 1;
}

Game.prototype.randomRoll = function() {
  return Math.floor((Math.random() * 10));
};

Game.prototype.roll = function(pins) {
  if (this.frameNum < 9 && pins === 10) {
    this.scoreBoard[this.frameNum].rolls[0] = pins;
    this.nextFrame();
  } else if (this.rollNum === 1 && pins < 10) {
    this.scoreBoard[this.frameNum].rolls[0] = pins;
    this.rollNum = 2;
  } else if (this.rollNum === 2 && pins < 10) {
    this.scoreBoard[this.frameNum].rolls[1] = pins;
    this.nextFrame();
  }
};

Game.prototype.nextFrame = function() {
  this.frameNum++;
  this.rollNum = 1;
};

Game.prototype.score = function() {
  score = 0;
  frameIndex = 0;
  for (var frame = 0; frame < this.frameNum; frame++) {
    if (this.isStrike(frameIndex)) {
      score += 10 + this.strikeBonus(frameIndex);
      frameIndex++;
    }
    else if (this.isSpare(frameIndex)) {
      score += 10 + this.spareBonus(frameIndex);
      frameIndex++;
    }
    else {
      score += this.rollsScore(frameIndex);
      frameIndex++;
    }
  };
  return score;
};

Game.prototype.isStrike = function(frameIndex) {
  return this.scoreBoard[frameIndex].rolls[0] === 10 || this.scoreBoard[frameIndex].rolls[1] === 10;
};

Game.prototype.rollsScore = function(frameIndex) {
  return this.scoreBoard[frameIndex].rolls.reduce( function(a,b) {
    return a + b;
  });
};

Game.prototype.frameScore = function(frameIndex) {
  if (this.isStrike(frameIndex)) {
    this.scoreBoard[frameIndex].frameTotal = this.rollsScore(frameIndex) + this.strikeBonus(frameIndex);
    return this.scoreBoard[frameIndex].frameTotal
  } else if (this.isSpare(frameIndex)) {
    this.scoreBoard[frameIndex].frameTotal = this.rollsScore(frameIndex) + this.spareBonus(frameIndex);
    return this.scoreBoard[frameIndex].frameTotal
  } else {
    this.scoreBoard[frameIndex].frameTotal = this.rollsScore(frameIndex)
    return this.scoreBoard[frameIndex].frameTotal
  }
};

Game.prototype.strikeBonus = function(frameIndex) {
  if (this.scoreBoard[frameIndex + 1].rolls.length >= 2) {
    return this.scoreBoard[frameIndex + 1].rolls.reduce( function(a,b) {
      return a + b;
    });
  } else {
    return this.scoreBoard[frameIndex + 1].rolls[0] + this.scoreBoard[frameIndex + 2].rolls[0];
  }
};

Game.prototype.isSpare = function(frameIndex) {
  return this.scoreBoard[frameIndex].rolls[0] + this.scoreBoard[frameIndex].rolls[1] === 10;
};

Game.prototype.spareBonus = function(frameIndex) {
  return this.scoreBoard[frameIndex + 1].rolls[0]
};
