var Bowling = function() {
  var STARTING_TOTAL = 0;
  var ROLL_ONE = Math.floor(Math.random() * 11);
  var ROLL_TWO = Math.floor(Math.random() * 11);
  var X = 10

  this.score = STARTING_TOTAL;


  Bowling.prototype.firstRoll = function() {
    this.score = ROLL_ONE;
    return this.score
  };
  Bowling.prototype.secondRoll = function() {
    this.score = ROLL_TWO;
    return this.score

  };

};
