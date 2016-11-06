function Score() {
  // Set these to - instead of 0?
    this._mostRecentRoll = 0;
    this._previousRoll = 0;
    this._currentFrame = [];
    this._allFrames = [];
    this._rollsMadeThisFrame = 0;
    this.finalFrameCount = 0;
    this.finalFrameRunningTotal = 0;
    this.finalFrameArr = [];
    this.finalFrameTotal = 0;
};

Score.prototype.roll = function (pinsDown) {
  console.log("all frames length: " + this._allFrames.length);
  if (this._allFrames.length < 9) {
    this.roll2(pinsDown);
  } else if (this._allFrames.length >= 9) {
    this.finalFrameScore(pinsDown);
  }
};

Score.prototype.roll2 = function (pinsDown) {
  this._previousRoll = this._mostRecentRoll;
  this._mostRecentRoll = pinsDown;
  if (this._rollsMadeThisFrame == 0) {
        if (pinsDown === 10) {
          this.framePusher(pinsDown);
          return
        };
      this._currentFrame.push(pinsDown);
      this._rollsMadeThisFrame += 1;
  } else if (this._rollsMadeThisFrame == 1) {
      this.framePusher(pinsDown);

}};

Score.prototype.finalFrameScore = function (pinsDown) {

  console.log(1);
    if (this.finalFrameCount < 1) {
      console.log(2);
    this.finalFrameRunningTotal += pinsDown;
    this.finalFrameArr.push(pinsDown);
    this.finalFrameCount += 1;
    console.log(7);
  } else if (this.finalFrameCount === 1) {
    console.log(3);
    this.finalFrameArr.push(pinsDown);
    this.finalFrameRunningTotal += pinsDown;

      if (this.finalFrameRunningTotal >= 10) {
        console.log(4);
      console.log("Last shot, make it a good one!");
      this.finalFrameCount += 1;
      console.log(this.finalFrameRunningTotal);

      return
    } else if (this.finalFrameRunningTotal < 10) {
      console.log(5);
      console.log("Your final score is: " + (this.runningTotal() + this.finalFrameRunningTotal));
      this.finalFrameTotal = this.finalFrameRunningTotal;
      return (this.runningTotal() + this.finalFrameRunningTotal)
    }
  }

  else if (this.finalFrameCount === 2) {
    console.log(6);
    this.finalFrameArr.push(pinsDown);
    // sumFinalFrame = finalFrameArr.reduce(function(a, b) {
    //   return a + b;
    // }, 0);
    sumFinalFrame = this.finalFrameArr[0] + this.finalFrameArr[1] + this.finalFrameArr[2];
    console.log("Your final score is: " + (this.runningTotal() + sumFinalFrame));
    this.finalFrameTotal = sumFinalFrame;
    return (this.runningTotal() + sumFinalFrame)
    }
  };


Score.prototype.runningTotal = function () {
  return this.baseTotal() + this.strikeBonus() + this.spareBonus() + this.finalFrameTotal;
};

Score.prototype.baseTotal = function () {
  // Flattens an array down to an array of integers
  flattenedAllFrames = this._allFrames.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  // Returns the sum of all integers in flattened array.
  sumAllFrames = flattenedAllFrames.reduce(function(a, b) {
    return a + b;
  }, 0);
  if(this._currentFrame.length > 0) {
    sumAllFrames += this._currentFrame[0]
  }
return sumAllFrames;
};

Score.prototype.strikeBonus = function () {
  var bonusTotal = 0;
  flattenedAllFrames = this._allFrames.reduce(function(a, b) {
    return a.concat(b);
  }, []);

  for (i = 0; i < flattenedAllFrames.length; i++){
    if (flattenedAllFrames[i] === 10){
      // This if statement stops the bonus being applied until the 2 bonus rolls happen
      if(i <= (flattenedAllFrames.length - 2)) {
      bonusTotal += flattenedAllFrames[i+1] + flattenedAllFrames[i+2];
    }
   }
  }
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

Score.prototype.framePusher = function (pinsDown) {
  this._currentFrame.push(pinsDown);
  this._allFrames.push(this._currentFrame);
  this._currentFrame = [];
  this._rollsMadeThisFrame = 0;
};

Score.prototype.mostRecentRoll = function () {
  return this._mostRecentRoll;
};

Score.prototype.previousRoll = function () {
  return this._previousRoll;
};

Score.prototype.allFrames = function () {
  return this._allFrames;
};

Score.prototype.currentFrame = function () {
  return this._currentFrame;
};
//
// else if (i === (this._allFrames.length - 1)) {
//   if (this._allFrames[i][0] + this._allFrames[i][1] === 10){
//     bonusTotal += this._currentFrame[0];
//   }
// }


// Score.prototype.knockedPins = function (modifier) {
//   score._mostRecentRoll = Math.floor(Math.random()*modifier);
//   return score._mostRecentRoll;
// };

    // this.knockedPins(11-this._previousRoll);

  // } else if (rollsMadeThisFrame == 2) {
  //   // return this._mostRecentRoll;
  // };
