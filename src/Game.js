function Game(frame, lastFrame) {
  this.frames = [];
  this.defaultValue = 10;
  this.frameScores = [];
  this.currentFrame = 0;
  this.currentRoll = 0;
  this.gameScore = null;
  for(i = 0; i < (this.defaultValue-1); i++) {
    this.frames.push(new frame);
  };
  this.frames.push(new lastFrame);
};

Game.prototype.bowl = function(hits) {
  this._gameOverCheck();
  if(this.currentRoll < 18){
    this._bowlNormalRound(hits);
  } else {
    this._bowlLastRound(hits);
  };
};

Game.prototype.calculateScore = function() {
  var totalScore = this.frameScores.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
  this.gameScore = totalScore;
};

Game.prototype.isGameOver = function() {
  if(this.frameScores.length == 10) {
    return true;
  } else {
    return false;
  };
};

Game.prototype._gameOverCheck = function() {
  if(this.isGameOver()){
    throw "Game is already over";
  }
};

Game.prototype._bowlNormalRound = function(hits) {
  this._isAStrike(hits);
  this._previousFrameStrikeAndSpareCheck(hits);
  this.frames[this.currentFrame].receiveRoll(hits);
  this._addScoreAndIncrement();
};

Game.prototype._isAStrike = function(hits) {
  if(this.currentRoll % 2 == 0 && hits == 10) {
    this.currentRoll++;
  };
};

Game.prototype._previousFrameStrikeAndSpareCheck = function(hits) {
  if(this.currentFrame > 0 && this._isPreviousFrameStrike()) {
    this._recalculatePreviousFrameScore(hits);
  };
  if(this.currentFrame > 0 && this._isPreviousFrameSpare() && this.frames[this.currentFrame].frameRolls[0] == null) {
    this._recalculatePreviousFrameScore(hits);
  }
  if(this.currentFrame > 1 && this._isTwoPreviousFrameStrike() && this.frames[this.currentFrame].frameRolls[0] == null) {
    this._recalculateTwoPreviousFrameScore(hits);
  }
};

Game.prototype._bowlLastRound = function(hits) {
  this.frames[this.currentFrame].receiveLastFrameRoll(hits);
  this.currentRoll++;
  if(this.frames[this.currentFrame].totalScore != null) {
    this._addToFrameScore();
    this._finalFrameStrikeAndSpareCheck();
  };
};

Game.prototype._addToFrameScore = function() {
  this.frameScores.push(this.frames[this.currentFrame].totalScore);
};


Game.prototype._finalFrameStrikeAndSpareCheck = function() {
  if(this._isPreviousFrameStrike()) { 
    this.frameScores[this.defaultValue - 2] += this.frames[this.currentFrame].frameRolls[0]; 
    this.frameScores[this.defaultValue - 2] += this.frames[this.currentFrame].frameRolls[1]; 
  };
  if(this._isPreviousFrameSpare()) {
    this.frameScores[this.defaultValue - 2] += this.frames[this.currentFrame].frameRolls[0];
  };
  if(this._isTwoPreviousFrameStrike()) {
    this.frameScores[this.defaultValue - 3] += this.frames[this.currentFrame].frameRolls[0];
  };
};

Game.prototype._addScoreAndIncrement = function() {
  this.currentRoll++;
  if(this.currentRoll % 2 == 0){
    this._addToFrameScore();
    this.currentFrame++;
  };
}

Game.prototype._isPreviousFrameSpare = function() {
  return this.frames[this.currentFrame - 1].spare;
};

Game.prototype._isPreviousFrameStrike = function() {
  return this.frames[this.currentFrame - 1].strike;
};

Game.prototype._isTwoPreviousFrameStrike = function() {
  return (this.frames[this.currentFrame - 2].strike && this._isPreviousFrameStrike() == true)
};

Game.prototype._recalculatePreviousFrameScore = function(hits) {
  var frame = Math.floor((this.currentRoll - 2) / 2);
  this.frameScores[frame]+=hits;
};

Game.prototype._recalculateTwoPreviousFrameScore = function(hits) {
  var frame = Math.floor((this.currentRoll - 2) / 2) - 1;
  this.frameScores[frame]+=hits;
};


