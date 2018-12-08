function Bowling(){
  this.rolls = [];
};


Bowling.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Bowling.prototype.gameScore = function () {
  var score = 0;
  for(var i = 0; i < 20; i++) {score += this.rolls[i]}
  return score;
};
