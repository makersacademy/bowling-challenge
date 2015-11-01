function Game() {
  this.scoreBoard = [];
  for(i=0; i<10; i++) this.scoreBoard[i]={rolls: [], frameTotal: 0};
  this.frameNum = 0;
  this.rollNum = 1;
  this.LAST_FRAME = 9;
}

Game.prototype.randomRoll = function() {
  return Math.floor((Math.random() * 10));
};

Game.prototype.roll = function(pins) {
  if (this.isLastFrame(this.frameNum)) {
    this.rollLastFrame(pins)
  } else  {
    this.rollFrame(pins);
  }
};

Game.prototype.rollLastFrame = function(pins){
  if (this.rollNum === 1) {
    this.scoreBoard[this.frameNum].rolls[0] = pins;
    this.rollNum++;
  } else if (this.rollNum === 2) {
    this.scoreBoard[this.frameNum].rolls[1] = pins;
    this.rollNum++;
  } else if (this.rollNum === 3) {
    this.scoreBoard[this.frameNum].rolls[2] = pins;
  }
}

Game.prototype.rollFrame = function(pins){
  if (pins === 10) {
    this.scoreBoard[this.frameNum].rolls[0] = pins;
    this.nextFrame();
  } else if (this.rollNum === 1 && pins < 10) {
    this.scoreBoard[this.frameNum].rolls[0] = pins;
    this.rollNum = 2;
  } else if (this.rollNum === 2 && pins < 10) {
    this.scoreBoard[this.frameNum].rolls[1] = pins;
    this.nextFrame();
  }
}

Game.prototype.nextFrame = function() {
  this.frameNum++;
  this.rollNum = 1;
};

Game.prototype.score = function() {
  score = 0;
  frameIndex = 0;
  for (var frame = 0; frame <= this.frameNum; frame++) {
    if (this.isStrike(frameIndex)) {
      score += 10 + this.strikeBonus(frameIndex);
      frameIndex++;
    } else if (this.isSpare(frameIndex)) {
      score += 10 + this.spareBonus(frameIndex);
      frameIndex++;
    } else {
      score += this.rollsScore(frameIndex);
      frameIndex++;
    }
  };
  this.scoreBoard[this.LAST_FRAME].frameTotal = score;
  return score;
};

Game.prototype.isStrike = function(frameIndex) {
  return this.scoreBoard[frameIndex].rolls[0] === 10;
};

Game.prototype.rollsScore = function(frameIndex) {
  return this.scoreBoard[frameIndex].rolls.reduce( function(a,b) {
    return a + b;
  });
};

Game.prototype.frameScore = function(frameIndex) {
  if (this.isStrike(frameIndex)) {
    return this.rollsScore(frameIndex) + this.strikeBonus(frameIndex);
  } else if (frameIndex === this.LAST_FRAME && this.isSpare(frameIndex)) {
    return this.rollsScore(frameIndex);
  } else if (this.isSpare(frameIndex)) {
    return this.rollsScore(frameIndex) + this.spareBonus(frameIndex);
  } else {
    return this.rollsScore(frameIndex);
  }
};

Game.prototype.updateFrameScore = function(frameIndex) {
  if (frameIndex === 0) {
    this.scoreBoard[frameIndex].frameTotal = this.frameScore(frameIndex);
  } else if (frameIndex < this.LAST_FRAME) {
    this.scoreBoard[frameIndex].frameTotal = this.frameScore(frameIndex) + this.scoreBoard[frameIndex-1].frameTotal;
  }
};

Game.prototype.strikeBonus = function(frameIndex) {
  if (frameIndex === 8) {
    if (this.scoreBoard[8].rolls.length === 1) {
      return this.scoreBoard[this.LAST_FRAME].rolls[0] + this.scoreBoard[9].rolls[1];
    } else
      return this.calcNextFrame(frameIndex + 1);
  }
  else if (frameIndex < 8) {
    if (this.scoreBoard[frameIndex + 1].rolls.length >= 2) {
      return this.calcNextFrame(frameIndex + 1);
    } else {
      return this.scoreBoard[frameIndex + 1].rolls[0] + this.scoreBoard[frameIndex + 2].rolls[0];
    }
  } else if (this.isLastFrame(frameIndex)) {
    return this.scoreBoard[this.LAST_FRAME].rolls[1] + this.scoreBoard[9].rolls[2];
  }
};

Game.prototype.isSpare = function(frameIndex) {
  return this.scoreBoard[frameIndex].rolls[0] + this.scoreBoard[frameIndex].rolls[1] === 10;
};

Game.prototype.spareBonus = function(frameIndex) {
  if (!this.isLastFrame(frameIndex)) {
    return this.scoreBoard[frameIndex + 1].rolls[0];
  }
  else if (this.isLastFrame(frameIndex) && this.scoreBoard[this.LAST_FRAME].rolls.length === 3) {
    return this.scoreBoard[this.LAST_FRAME].rolls[2];
  }
};

Game.prototype.isLastFrame = function(frameIndex) {
  return frameIndex === this.LAST_FRAME;
};

Game.prototype.calcNextFrame = function(frameIndex) {
  return this.scoreBoard[frameIndex].rolls.reduce( function(a,b) {
    return a + b;
  });
};
