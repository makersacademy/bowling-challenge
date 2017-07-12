function Bowling() {
  this.strike = false;
  this.spare = false;
  this.total = {};
  this.frameScore = [];
  this.frameCount = 1;
}

Bowling.prototype.addScore = function(sum) {
  this.checkPinError(sum);
  this.frameScore.push(sum);
  // this.checkStrike(sum);
  // this.ifStrikeAddBonus();
  this.checkSpare();
  this.ifSpareAddBonus(sum);
  this.checkEndFrame();
}


Bowling.prototype.checkEndFrame = function() {
  if (this.frameScore.length === 2 && this.frameCount > 1) {
    this.total[this.frameCount] = this.addFrameScore();
    this.total[this.frameCount] += this.total[this.frameCount-1];
    this.frameCount ++;
    this.frameScore = [];
  } else if (this.frameScore.length === 2 && this.frameCount === 1) {
    this.total[this.frameCount] = this.addFrameScore();
    this.frameCount ++;
    this.frameScore = [];
  }
}

Bowling.prototype.addFrameScore = function() {
  var total = this.frameScore.reduce(function(a, b) {
    return a + b;
  });
  return total;
}

Bowling.prototype.checkSpare = function() {
  if (this.addFrameScore() === 10 && this.frameScore.length === 2) {
    this.spare = true
  }
}

Bowling.prototype.ifSpareAddBonus = function(sum) {
  if(this.spare === true && this.frameScore.length === 1) {
    this.total[this.frameCount-1] += sum;
    this.spare = false;
  }
}

Bowling.prototype.checkPinError = function(sum) {
  if(sum > 10 && this.frameCount[0] === undefined) {
    throw new Error("Too many pins - try again");
  } else if (sum + this.frameScore[0] > 10) {
    throw new Error("Too many pins - try again");
  }
}

// Bowling.prototype.checkStrike = function(sum) {
//   if(sum === 10) {
//     this.strike = true;
//     this.total[this.frameCount] = (this.total[this.frameCount-1] + 10);
//     this.frameCount ++;
//     this.frameScore = [];
//   }
// }
//
// Bowling.prototype.ifStrikeAddBonus = function() {
//   if(this.strike === true && this.frameScore.length === 2) {
//     this.total[this.frameCount-1] += this.addFrameScore();
//     this.strike = false;
//   }
// }

Bowling.prototype.frameScore = function() {
  return this.frameScore;
}

Bowling.prototype.total = function() {
  return this.total;
}
