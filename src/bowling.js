
var Bowling = function () {
  var STARTING_TOTAL = 0;
  this.score = STARTING_TOTAL; // remains unused; did you mean "totalScore"?
  this.firstScore = 0;
  this.secondScore = 0;
  this.totalCurrentFrameScore = 0;
  this.rolls = [];
};

function randomInt(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

var maxRoll = 11

// Bowling.prototype.roll = function() {
//   var rollOne = randomInt(maxRoll);
//   this.firstScore = rollOne;
//   this.rolls.push(this.firstScore)
//   var rollTwo = randomInt(maxRoll - this.firstScore);
//   this.secondScore = rollTwo;
//   this.rolls.push(this.secondScore)
//   return this.rolls
// };

Bowling.prototype.firstRoll = function () {
  var rollOne = randomInt(maxRoll);
  this.firstScore = rollOne;
  this.rolls.push(this.firstScore)
  return this.rolls;
};

Bowling.prototype.secondRoll = function () {
  var rollTwo = randomInt(maxRoll - this.firstScore);
  this.secondScore = rollTwo;
  this.rolls.push(this.secondScore)
  return this.rolls;

};

Bowling.prototype.frameScore = function () {
  this.totalCurrentFrameScore = this.firstScore + this.secondScore;
  return this.totalCurrentFrameScore;
};


Bowling.prototype.frames = function () {
var rollsScore = this.rolls
if(rollsScore.length > 20) {
  throw "Game Over!"
} else {
  return rollsScore
}

};
