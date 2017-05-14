function Game() {
  this.frames = [
    // new Frame(3, 5),
    // new Frame(10),
    // new Frame(10),
    // new Frame(10),
    // new Frame(10),
    // new Frame(4, 2),
    // new Frame(6, 4), // Spare
    // new Frame(2, 5),
    // new Frame(10),  // Strike
    // new Frame(1, 8),
  ]
  this.testFrames = [
    new Frame(3, 5),
    new Frame(10),
    new Frame(10),
    new Frame(10),
    new Frame(10),
    new Frame(4, 2),
    new Frame(6, 4), // Spare
    new Frame(2, 5),
    new Frame(10),  // Strike
    new Frame(1, 3),
  ]
  this.totalScore = 0;
  this.cachedScore;
  this.savedBowl = -1;
  this.spare;
  this.finalFrame = undefined;
}

Game.prototype.bowl = function(n) {
  if (this.frames.length >= 9) {
    console.log('Final frame!')
    this._finalBowl(n);
  } else {
    this._standardBowl(n);
  };
};

Game.prototype.strikeCalc = function(i) {
  if (i + 1 === this.frames.length) { return " " };
  if (this.frames[i + 1].isStrike()) {
    return Number(10 + this.frames[i + 1].score[0] + this.frames[i + 2].score[0]);
  } else {
    return Number(10 + this.frames[i + 1].score[0] + this.frames[i + 1].score[1]);
  };
};


// Private

Game.prototype._finalBowl = function(n) {
  if (this.finalFrame) {
    this.frames[this.frames.length-1].addBowl(n);
    this._finalFrameCheck();
  } else {
    this.finalFrame = this.frames.push(new FinalFrame(n));
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
    this.savedBowl = Number(n);
  };
}

Game.prototype._addFrame = function(n) {
  this.frames.push(new Frame(this.savedBowl, Number(n)));
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
  console.log("Shoop da woop")
  var frame = this.frames[this.frames.length-1];
  console.log(frame);
  console.log(frame.isEnded())
  if (frame.isEnded()) {
    console.log("Frame is ended apaz")
    updateScores()
  } else {
    updateFinalFrame(frame);
  };
};
