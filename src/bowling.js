var Bowling = function () {
  var STARTING_TOTAL = 0;
  this.score = STARTING_TOTAL; // remains unused; did you mean "totalScore"?
  this.firstScore = 0;
  this.secondScore = 0;
};

Bowling.prototype.firstRoll = function () {
  this.firstScore = Math.floor(Math.random() * 11);
  return this.firstScore;
};

Bowling.prototype.secondRoll = function () {
  var firstRollScore = this.firstScore
  this.secondScore = Math.floor(Math.random() * (11 - firstRollScore))
  return this.secondScore;

};

Bowling.prototype.frameScore = function () {
  this.totalScore = this.firstScore + this.secondScore
  return this.totalScore;
};









//   var STARTING_TOTAL = 0;
//   ROLL_ONE = Math.floor(Math.random() * 11);
//   ROLL_TWO = Math.floor(Math.random() * 11);
//   this.score = STARTING_TOTAL;
//    var firstScore;
//    var secondScore;
//    var totalScore;
//
//   Bowling.prototype.firstRoll = function() {
//     firstScore = ROLL_ONE
//     return firstRoll()
//   };
//   //
//   Bowling.prototype.secondRoll = function() {
//     secondScore =  Math.floor(Math.random() * 11 - firstScore);
//     return secondScore;
//
//   };
//
//   Bowling.prototype.frameScore = function (firstScore, secondScore) {
//   totalScore = (firstRoll() + secondRoll())
//   return totalScore;
//   };
//
//
// };
