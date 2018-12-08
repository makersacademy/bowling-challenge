function Bowling(){
  this.rolls = [];
  this.score = 0;
};


Bowling.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Bowling.prototype.gameScore = function () {
  this.score = (accumulator, currentValue) => accumulator + currentValue;
  return this.rolls.reduce(this.score);
};
