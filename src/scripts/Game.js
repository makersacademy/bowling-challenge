function Game() {
  this.frameNo = 1;
  this.frame = new Frame;  
  this.totalScores = [[],[],[],[],[],[],[],[],[],[],[]];
  this.cummulativeScore = [null,null,null,null,null,null,null,null,null,null,null];
  this.pinsStanding = 10;
}

Game.prototype.recordBowl = function(pinsKnockedOver) {
  if (this.isGameOver()) {
    alert('Game over! Score: ' + this.cummulativeScore[9]);
    return;
  }
  this.adjustRolls();
  this.pinsStanding -= pinsKnockedOver;
  this.frame.registerRoll(pinsKnockedOver);
  this.totalScores[this.currentFrameIndex()] = this.frame.totalScoreRecord;
  if (!this.frame.isInProgress()) {
    this.concludeFrame();
  }
};

Game.prototype.isGameOver = function() {
  if (this.frameNo > 12) {
    return true;
  }
  else if ((this.frameNo > 11) && !(this.isLastFrameStrike() || this.isFrameBeforeLastStrike())) {
    return true;
  }
  else if ((this.frameNo > 10) && !((this.isLastFrameSpare()) || (this.isLastFrameStrike()))) {
    return true;
  }
  else {
    return false;
  }
};

Game.prototype.adjustRolls = function() {
  if (this.frameNo > 10 && this.isLastFrameSpare()) {
    this.frame.rollsRemaining = 1;
  }
  if (this.frameNo > 11 && this.isLastFrameStrike()) {
    this.frame.rollsRemaining = 1;
  }
};

Game.prototype.calculateTotalScore = function() {
  var sumOfScores = 0;
  for (var i = 0; i < Math.min(10, this.totalScores.length); i++) {
    sumOfScores += (this.totalScores[i][2] || 0)
  }
  return sumOfScores;
}

Game.prototype.isLastFrameStrike = function() {
  return ((this.frameNo > 1) && (this.totalScores[this.lastFrameIndex()][0] === 10));
};

Game.prototype.isFrameBeforeLastStrike = function() {
  return ((this.frameNo > 2) && (this.totalScores[this.lastFrameIndex() - 1][0] === 10));
};

Game.prototype.isLastFrameSpare = function() {
  return ((this.frameNo > 1) && (this.totalScores[this.lastFrameIndex()][2] === 10) && !(this.totalScores[this.lastFrameIndex()][0] === 10));
};

Game.prototype.currentFrameIndex = function() {
  return this.frameNo - 1;
};

Game.prototype.lastFrameIndex = function() {
  return this.frameNo - 2;
};

Game.prototype.frameBeforeLastIndex = function() {
  return this.frameNo - 3;
};

Game.prototype.isBonusRound = function() {
  return this.frameNo > 2;
};

Game.prototype.concludeFrame = function(first_argument) {
  this.totalScores[this.currentFrameIndex()][2] = this.frame.totalScore();
  this.addBonuses();
  this.addCummulativeScore();
  this.frameNo ++;
  this.frame = new Frame();
  this.pinsStanding = 10;
};

Game.prototype.addCummulativeScore = function() {
  this.cummulativeScore = [null,null,null,null,null,null,null,null,null,null,null];
  for (var i = 0; i < this.frameNo; i++) {
    for (var j = 0; j < (i + 1); j++) {
      this.cummulativeScore[i] += this.totalScores[j][2];
    }
  }
};

Game.prototype.addBonuses = function() {
  if (this.isLastFrameSpare()) {
    this.totalScores[this.lastFrameIndex()][2] += this.totalScores[this.currentFrameIndex()][0];
  }
  if (this.isLastFrameStrike()) {
    this.totalScores[this.lastFrameIndex()][2] += this.totalScores[this.currentFrameIndex()][2];
  }
  if (this.isLastFrameStrike() && this.isFrameBeforeLastStrike()) {
    this.totalScores[this.frameBeforeLastIndex()][2] += this.totalScores[this.currentFrameIndex()][2];
  }
};

Game.prototype.frameReset = function() {
  this.frameNo += 1;
  this.pins   = 10;
  this.roll   = 1;
};
