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

BowlingScoreCard.prototype.showScore = function() {
  return this.totalScore;
};

BowlingScoreCard.prototype.roll = function(pinsHit) {
  var currentFrame = this.getCurrentFrame();
  var currentRoll = this.getCurrentRoll();
  if (pinsHit === 10) {
    this.allFrames[currentFrame] = [10, '-'];
  }
  else if (currentRoll[0] === null) {
    currentRoll[0] = pinsHit;
    this.allFrames[currentFrame] = currentRoll;
    // console.log('The current frame is '+ currentFrame + ' and the current roll is ' + currentRoll);
  } else {
    currentRoll[1] = pinsHit;
    this.allFrames[currentFrame] = currentRoll;
    // console.log('The current frame is '+ currentFrame + ' and the current roll is ' + currentRoll);
  }
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
