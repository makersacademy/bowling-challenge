function Game() {
  this.frames = [];
  this.totalScore = 0;
  this.cachedScore = undefined;
  this.savedBowl = -1;
  this.spare = undefined;
  this.finalFrame = undefined;
};

Game.prototype.bowl = function(roll) {
  roll = Number(roll);
  disableOptions(roll);
  if (this.frames.length >= 9) {
    this._finalBowl(roll);
  } else {
    this._standardBowl(roll);
  };
};

Game.prototype.strikeCalc = function(i) {
  if (this.frames[i + 1].isStrike()) {
    return 10 + this.frames[i + 1].score[0] + this.frames[i + 2].score[0];
  } else {
    return 10 + this.frames[i + 1].score[0] + this.frames[i + 1].score[1];
  };
};


// Private

Game.prototype._finalBowl = function(n) {
  var index = this.frames.length - 1;
  if (this.finalFrame) {
    this.frames[index].addBowl(n);
    if (this.frames[index-1].isStrike()) {
      finalStrikeScore(index);
    };
    this._finalFrameCheck();
    enableOptions();
  } else {
    this.finalFrame = this.frames.push(new FinalFrame(n));
    if (this.frames[index-1].isSpare()) {
      finalSpareScore(n);
    } else if (this.frames[index-2].isStrike() && this.frames[index-1].isStrike()) {
      strikeUpdate();
      enableOptions();
    }
    this._finalFrameCheck();
  };
};

Game.prototype._standardBowl = function(n) {
  if (this.savedBowl !== -1) {
    this._addFrame(n);
    enableOptions();
  } else if (n == 10) {
    this._addStrike();
    enableOptions();
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
    updateScores();
  } else {
    updateFinalFrame(frame);
  };
};
