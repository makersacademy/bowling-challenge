function Game(frame) {
  this.frames = [];
  this.defaultValue = 10;
  this.frameScores = [];
  this.currentFrame = 0;
  this.currentRoll = 0;
  for(i = 0; i < this.defaultValue; i++) {
      this.frames.push(new frame);
    }
};

Game.prototype.bowl = function(hits) {
  this._isAStrike(hits);
  if(this.currentFrame > 0 && this._isPreviousFrameStrike() == true) {
    this._recalculateFrameScore(hits);
  };
  if(this.currentFrame > 0 && this._isPreviousFrameSpare() == true && this.frames[this.currentFrame].firstRoll == null) {
    this._recalculateFrameScore(hits);
  };
  this.frames[this.currentFrame].receiveRoll(hits);
  this.currentRoll++;
  this._addScoreAndIncrement();
};

Game.prototype.calculateScore = function() {
  var totalScore = this.frameScores.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
  return totalScore;
};

Game.prototype._isCurrentFrameSpare = function () {
  if(this.frames[this.currentFrame].spare) {
    return true;
  } else {
    return false;
  };
};

Game.prototype._isPreviousFrameSpare = function() {
  if(this.frames[this.currentFrame - 1].spare) {
    return true;
  } else {
    return false;
  };
};

Game.prototype._isPreviousFrameStrike = function() {
  if(this.frames[this.currentFrame - 1].strike) {
    return true;
  } else {
    return false;
  };
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

Game.prototype._recalculateFrameScore = function(hits) {
  var frame = Math.floor((this.currentRoll - 2) / 2);
  this.frameScores[frame]+=hits;
};


