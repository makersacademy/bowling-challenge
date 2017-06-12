var Bowling = function() {
  var STARTING_TOTAL = 0;
  var ROLL_ONE = Math.floor(Math.random() * 11);
  var ROLL_TWO = Math.floor(Math.random() * 11);
  var MAX_SCORE = 10

  this.score = STARTING_TOTAL;
  var firstRoll;
  var secondRoll;
  // var _common;

  Bowling.prototype.firstRoll = function() {
    var firstRoll = ROLL_ONE;
    // _common = firstRoll1;
    return firstRoll
  };

  Bowling.prototype.secondRoll = function() {
    var firstRoll = this.firstRoll()
    var secondRoll = Math.floor(Math.random() * (11-firstRoll));
    // _common = secondRoll;
    return secondRoll;
  };

  Bowling.prototype.frameScore = function (){
    var frameScores = this.firstRoll() + this.secondRoll()
    return frameScores;
  };

  // Bowling.prototype.score1 = function(){
  //   this.score = ROLL_ONE
  // if (this.score === 1) {
  //   this.score
  //     this.score = this.score + Math.floor(Math.random() * 10);
  //     return this.score;
  // } else if(this.score === 2) {
  //   this.score
  //     this.score = this.score + Math.floor(Math.random() * 9);
  //     return this.score;
  // };
  // }

};
