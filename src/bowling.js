
var Bowling = function () {
  var STARTING_TOTAL = 0;
  this.score = STARTING_TOTAL; // remains unused; did you mean "totalScore"?
  this.firstScore = 0;
  this.secondScore = 0;
  this.totalCurrentFrameScore = 0;
  this.rolls = [];
};

function randomInt(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

var maxRoll = 11

var rollOne = randomInt(maxRoll)
var rollTwo = randomInt(maxRoll - rollOne)


Bowling.prototype.firstRoll = function () {
  this.score
  this.firstScore = rollOne
  return this.firstScore;
};

Bowling.prototype.secondRoll = function () {
  this.secondScore = rollTwo
  return this.secondScore;

};

Bowling.prototype.totalScore = function () {
  this.totalCurrentFrameScore = this.firstScore + this.secondScore
  return this.totalCurrentFrameScore;
};


Bowling.prototype.frameScore = function () {

  this.rolls.push(this.firstScore, this.secondScore);
  return this.rolls;
};




// var numbers = [2, 5, 8];
// var numbersSum = 0;
//
// for (var i = 0; i < numbers.length; i++) {
//   numbersSum += numbers[i]
// }
