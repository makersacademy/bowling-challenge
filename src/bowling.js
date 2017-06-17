var Bowling = function() {
  this.rolls = [];
};

  Bowling.prototype.roll = function(pins) {
    this.rolls.push(pins);
  };

  Bowling.prototype.score = function() {
    var bowlingResult = 0;
    for (var i = 0; i < 20; i++){
      bowlingResult += this.rolls[i];
    }
    return bowlingResult;
  };





















  
