function Game() {
  this.frames = []
  this.totalScore = 0;
  this.cachedScore;
  this.savedBowl = -1;
  this.spare;
  this.finalFrame = undefined;
}

Game.prototype.bowl = function(n) {
  n = Number(n);
  if (this.frames.length >= 9) {
    this._finalBowl(n);
  } else {
    this._standardBowl(n);
  };
};

Game.prototype.strikeCalc = function(i) {
  if (i + 1 === this.frames.length) { return " " };
  if (this.frames[i + 1].isStrike()) {
    return 10 + this.frames[i + 1].score[0] + this.frames[i + 2].score[0];
  } else {
    return 10 + this.frames[i + 1].score[0] + this.frames[i + 1].score[1];
  };
};


// Private

Game.prototype._finalBowl = function(n) {
  var index = this.frames.length-1
  if (this.finalFrame) {
    this.frames[index].addBowl(n);
    if (this.frames[index-1].isStrike()) {
      finalStrikeScore(index);
    }
    this._finalFrameCheck();
  } else {
    this.finalFrame = this.frames.push(new FinalFrame(n));
    if (this.frames[index-1].isSpare()) {
      finalSpareScore(n)
    } else if (this.frames[index-2].isStrike() && this.frames[index-1].isStrike()) {
      strikeUpdate();
    }
    this._finalFrameCheck();
  };
};

Game.prototype._standardBowl = function(n) {
  if (this.savedBowl !== -1) {
    this._addFrame(n);
  } else if (n == 10) {
    this._addStrike();
  } else {
    updatePartialBowl(n);
    this.savedBowl = n;
  };
};

Game.prototype._addFrame = function(n) {
  this.frames.push(new Frame(this.savedBowl, n));
  this.savedBowl = -1;
  updateScores();
  this.totalScore = 0;
};

Game.prototype._addStrike = function() {
  this.frames.push(new Frame(10));
  updateScores();
  this.totalScore = 0;
};

Game.prototype._finalFrameCheck = function() {
  var frame = this.frames[this.frames.length-1];
  if (frame.isEnded()) {
    updateScores()
  } else {
    updateFinalFrame(frame);
  };
};
