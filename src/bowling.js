var Bowling = function() {
  var STARTING_TOTAL = 0;
  var ROLL_ONE = Math.floor(Math.random() * 11);

  this.score = STARTING_TOTAL;


  Bowling.prototype.firstRoll = function() {
    this.score = ROLL_ONE;
    return this.score
  };

};
