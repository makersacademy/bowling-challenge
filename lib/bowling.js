function Score() {
    // this._mostRecentRoll = 0;
    // this._previousRoll = 0;
    this._currentFrame = [];
    this._allFrames = [];
    this._rollsThisFrame = 0;
    this.finalFrameCount = 0;
    this.finalFrameRunningTotal = 0;
    this.finalFrameArr = [];
    this.finalFrameTotal = 0;
    this.flattenedAllFrames = [];
    this.sumAllFrames = 0;
};

Score.prototype.roll = function (pinsDown) {
  if (this._allFrames.length < 9) {
    this.normalFrameHandler(pinsDown);
  } else if (this._allFrames.length >= 9) {
    this.finalFrameHandler(pinsDown);
  }
};

Score.prototype.normalFrameHandler = function (pinsDown) {
  if (this._rollsThisFrame === 0) {
        if (pinsDown === 10) {
          this.framePusher(pinsDown);
          return
        };
      this._currentFrame.push(pinsDown);
      this._rollsThisFrame += 1;
  } else if (this._rollsThisFrame == 1) {
      this.framePusher(pinsDown);
}};

Score.prototype.framePusher = function (pinsDown) {
  this._currentFrame.push(pinsDown);
  this._allFrames.push(this._currentFrame);
  this._currentFrame = [];
  this._rollsThisFrame = 0;
};

Score.prototype.finalFrameHandler = function (pinsDown) {
    if (this.finalFrameCount < 1) {
    this.finalFrameRunningTotal += pinsDown;
    this.finalFrameArr.push(pinsDown);
    this.finalFrameCount += 1;
  } else if (this.finalFrameCount === 1) {
    this.finalFrameArr.push(pinsDown);
    this.finalFrameRunningTotal += pinsDown;
      if (this.finalFrameRunningTotal >= 10) {
      this.finalFrameCount += 1;
      return
    } else if (this.finalFrameRunningTotal < 10) {
      this.finalFrameTotal = this.finalFrameRunningTotal;
      return (this.runningTotal() + this.finalFrameRunningTotal)
    }
  }
  else if (this.finalFrameCount === 2) {
    this.finalFrameArr.push(pinsDown);
    sumFinalFrame = this.finalFrameArr[0] + this.finalFrameArr[1] + this.finalFrameArr[2];
    this.finalFrameTotal = sumFinalFrame;
    return (this.runningTotal() + sumFinalFrame)
    }
  };

Score.prototype.runningTotal = function () {
  return this.baseTotal() + this.strikeBonus() + this.spareBonus() + this.finalFrameTotal;
};

Score.prototype.baseTotal = function () {
  this.flattenedAF();
  this.sumAF();
  if(this._currentFrame.length > 0) {
    this.sumAllFrames += this._currentFrame[0]
  }
return this.sumAllFrames;
};

// Flattens an array down to an array of integers
Score.prototype.flattenedAF = function () {
  this.flattenedAllFrames = this._allFrames.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};

Score.prototype.sumAF = function () {
  // Returns the sum of all integers in flattened array.
  this.sumAllFrames = this.flattenedAllFrames.reduce(function(a, b) {
    return a + b;
  }, 0);
};

Score.prototype.strikeBonus = function () {
  var bonusTotal = 0;
  this.flattenedAF();
  for (i = 0; i < this.flattenedAllFrames.length; i++){
    if (this.flattenedAllFrames[i] === 10){
      // This if statement stops the bonus being applied until the 2 bonus rolls happen
      if(i <= (this.flattenedAllFrames.length - 2)) {
      bonusTotal += this.flattenedAllFrames[i+1] + this.flattenedAllFrames[i+2];
    }}}
  return bonusTotal;
};

Score.prototype.spareBonus = function () {
  var bonusTotal = 0;
  // loop over an amount of times equal to the elements in allFrames
  for (i = 0; i < this._allFrames.length; i++){
    // only loop up to the frame before the end
    if (i < (this._allFrames.length - 1)) {
      // only add things to the bonus if the frame in question is a spare
      if (this._allFrames[i][0] + this._allFrames[i][1] === 10){
        bonusTotal += this._allFrames[i+1][0];
      }};
  }
  return bonusTotal;
};
