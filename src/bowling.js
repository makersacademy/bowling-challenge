function Bowling(){
  this.roll1 = 0
  this.roll2 = 0
};

Bowling.prototype.roll = function(roll1, roll2) {
  this.roll1 = roll1;
  this.roll2 = roll2;
};
