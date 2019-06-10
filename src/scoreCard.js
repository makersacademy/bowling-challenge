function Scorecard() {

  this.currentFrameNumber = 1;
  this.MAXNumberOfFrames = 10;

  this.maxRolls = 2;
  this.maxRollsForStrike = 1;

  this.currentFrameRolls = [];
  this.currentFrameScore = 0;

  this.bonusScoreAvailable = false;
  this.bonusScorePoints = 0;

  this.totalFrames = [];
};

// Scorecard.prototype.totalScore = function () {
//   return this._currentFrameScore;
// };

Scorecard.prototype.endFrame = function() {
  var totalFrames;
  var currentFrameRolls;

  this.totalFrames.push(currentFrameRolls);
  console.log(this.totalFrames);
};

Scorecard.prototype.enterRoll = function(roll) {
  var maxRolls;

  if (roll === 10) {
    maxRolls = this.maxRollsForStrike
  } else {
    maxRolls = this.maxRolls;
  }

  if (this.currentFrameRolls.length < maxRolls) {
    this.currentFrameRolls.push(roll);
  }
};

Scorecard.prototype.calculateFrame = function() {
  const frame = this.currentFrameRolls;
  const reducer = (a, b) => a + b;

  console.log(frame.reduce(reducer));

// var sum = this.currentFrameRolls.reduce((a, b) => a + b, 0);
  return this.currentFrameScore += sum;
};

//
//   if (role === 10) {
//     this.currentFrameRolls.push(roll);
//     // this.bonusScoreAvailable = true;
//     // this.endFrame();
//   }
//   if (this.currentFrameRolls.length < 2) {
//     this.currentFrameRolls.push(roll);
//   }
//   this.endFrame();
// };
