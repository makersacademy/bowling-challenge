var BowlingScoreCard = function() {
  this.allFrames = [[null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null]]
  this.totalScore = 0;
};

BowlingScoreCard.prototype.roll = function(pinsHit) {
  var currentFrame = this.getCurrentFrame();
  var currentRoll = this.getCurrentRoll();
  if (pinsHit === 10) {
    this.allFrames[currentFrame] = [10, '-'];
  }
  else if (currentRoll[0] === null) {
    this.allFrames[currentFrame][0] = pinsHit;
  }
  else {
    this.allFrames[currentFrame][1] = pinsHit;
  }
  this.lastFrame();
  return pinsHit;
};

BowlingScoreCard.prototype.getCurrentFrame = function() {
  for (index=0; index < this.allFrames.length; index++){
    if (this.allFrames[index][1] === null) {
      return index;
      break;
    }
  }
};

BowlingScoreCard.prototype.getCurrentRoll = function() {
  var currentFrame = this.getCurrentFrame();
  return this.allFrames[currentFrame]
};

BowlingScoreCard.prototype.calculateScore = function() {
  this.totalScore = 0;
  if (!this._hasBonusFrame()) {
    var framesToCalculate = this.allFrames.slice(0, this.getCurrentFrame());
    this._rollingScore(framesToCalculate);
  } else  {
    var framesToCalculate = this.allFrames.slice(0, 9);
    this._rollingScore(framesToCalculate);
    this.totalScore = this.totalScore + 10 + eval(this.allFrames[10].join('+'));
  };
  return this.totalScore
}

BowlingScoreCard.prototype._rollingScore = function(framesToCalculate) {
  for (var rollIndex = 0; rollIndex < framesToCalculate.length; rollIndex++){
    if (framesToCalculate[rollIndex][0] === 10 && framesToCalculate[rollIndex + 1]) {
      this.totalScore = this.totalScore + 10 + framesToCalculate[rollIndex + 1][0] + framesToCalculate[rollIndex + 1][1];
    }
    else if ( framesToCalculate[rollIndex][0] + framesToCalculate[rollIndex][1] === 10 && framesToCalculate[rollIndex + 1]) {
      this.totalScore = this.totalScore + 10 + framesToCalculate[rollIndex + 1][0];
    }
    else {
      this.totalScore = this.totalScore + framesToCalculate[rollIndex][0] + framesToCalculate[rollIndex][1];
    };
  };
}

BowlingScoreCard.prototype.lastFrame = function() {
  if (this.allFrames[9][0] === 10) {
    this.allFrames.push([null, null]);
  } else if ( this.allFrames[9][0] + this.allFrames[9][1] === 10 ) {
    this.allFrames.push([null]);
  };
}

BowlingScoreCard.prototype._hasBonusFrame = function() {
  if ( (this.allFrames[9][0] === 10) || (this.allFrames[9][0] + this.allFrames[9][1] === 10) ){
    return true
  }
}

bowlingScoreCard = new BowlingScoreCard();
bowlingScoreCard.roll(1)
bowlingScoreCard.roll(4)
bowlingScoreCard.roll(4)
bowlingScoreCard.roll(5)
bowlingScoreCard.roll(6)
bowlingScoreCard.roll(4)
bowlingScoreCard.roll(5)
bowlingScoreCard.roll(5)
bowlingScoreCard.roll(10)
bowlingScoreCard.roll(0)
bowlingScoreCard.roll(1)
bowlingScoreCard.roll(7)
bowlingScoreCard.roll(3)
bowlingScoreCard.roll(6)
bowlingScoreCard.roll(4)
bowlingScoreCard.roll(10)
bowlingScoreCard.roll(2)
bowlingScoreCard.roll(8)
bowlingScoreCard.roll(6)
