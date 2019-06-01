function Bowling(){
  this.total = 0;
  this.rolls = [];
};

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Bowling.prototype.score = function() {
  var total = 0;
  for (var i=0; i<20; i++) {
    total += this.rolls[i];
  }
  return total;
};
