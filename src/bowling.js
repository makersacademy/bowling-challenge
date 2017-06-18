
var Bowling = function () {
  var STARTING_TOTAL = 0;
  this.score = STARTING_TOTAL; // remains unused; did you mean "totalScore"?
  this.firstScore = 0;
  this.secondScore = 0;
};

function randomInt(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

var maxRoll = 11

var rollOne = randomInt(maxRoll)
var rollTwo = randomInt(maxRoll - rollOne)


Bowling.prototype.firstRoll = function () {
  this.firstScore = rollOne
  return this.firstScore;
};

Bowling.prototype.secondRoll = function () {
  this.secondScore = rollTwo
  return this.secondScore;

};

Bowling.prototype.frameScore = function () {
  this.totalScore = this.firstScore + this.secondScore
  return this.totalScore;
};




// var Bowling = function () {
//   var STARTING_TOTAL = 0;
//   this.score = STARTING_TOTAL; // remains unused; did you mean "totalScore"?
//   this.firstScore = 0;
//   this.secondScore = 0;
// };
//
// Bowling.prototype.firstRoll = function () {
//   this.firstScore = Math.floor(Math.random() * 11);
//   return this.firstScore;
// };
//
// Bowling.prototype.secondRoll = function () {
//   var firstRollScore = this.firstScore
//   this.secondScore = Math.floor(Math.random() * (11 - firstRollScore))
//   return this.secondScore;
//
// };
//
// Bowling.prototype.frameScore = function () {
//   this.totalScore = this.firstScore + this.secondScore
//   return this.totalScore;
// };
