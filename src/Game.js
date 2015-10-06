function Game(frame, lastFrame) {
  this.frames = [];
  this.defaultValue = 10;
  this.frameScores = [];
  this.currentFrame = 0;
  this.currentRoll = 0;
  for(i = 0; i < (this.defaultValue-1); i++) {
    this.frames.push(new frame);
  };
  this.frames.push(new lastFrame);
};

Game.prototype.bowl = function(hits) {
  if(this.currentRoll < 18){
    this._isAStrike(hits);
    if(this.currentFrame > 0 && this._isPreviousFrameStrike() == true) {
      this._recalculatePreviousFrameScore(hits);
    };
    if(this.currentFrame > 0 && this._isPreviousFrameSpare() == true && this.frames[this.currentFrame].firstRoll == null) {
      this._recalculatePreviousFrameScore(hits);
    }
    if(this.currentFrame > 1 && this._isTwoPreviousFrameStrike() == true && this.frames[this.currentFrame].firstRoll == null) {
      this._recalculatePreviousFrameScore(hits);
    }
    this.frames[this.currentFrame].receiveRoll(hits);
    this.currentRoll++;
    this._addScoreAndIncrement();
  } else {
    this.frames[this.currentFrame].receiveLastFrameRoll(hits);
    this.frameScores.push(this.frames[this.currentFrame].totalScore)
  };
};

Game.prototype.calculateScore = function() {
  var totalScore = this.frameScores.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
  return totalScore;
};

Game.prototype._isPreviousFrameSpare = function() {
  return this.frames[this.currentFrame - 1].spare;
};

Game.prototype._isPreviousFrameStrike = function() {
  return this.frames[this.currentFrame - 1].strike;
};

Game.prototype._isTwoPreviousFrameStrike = function() {
  return this.frames[this.currentFrame - 2].strike;
};

Game.prototype._isAStrike = function(hits) {
  if(this.currentRoll % 2 == 0 && hits == 10) {
    this.currentRoll++;
  };
};

Game.prototype._addScoreAndIncrement = function() {
  if(this.currentRoll % 2 == 0){
    this.frameScores.push(this.frames[this.currentFrame].totalScore);
    this.currentFrame++;
  };
}

Game.prototype._recalculatePreviousFrameScore = function(hits) {
  var frame = Math.floor((this.currentRoll - 2) / 2);
  this.frameScores[frame]+=hits;
};


