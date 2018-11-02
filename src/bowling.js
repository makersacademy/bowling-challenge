var Bowling = function() {
  this.score = 0;
  this.frame = 1;
  this.bowls = 2;
};

Bowling.prototype.returnScore = function() {
  return this.score;
};

Bowling.prototype.returnFrame = function() {
  return this.frame;
};

Bowling.prototype.bowl = function(score) {
  this.score += score;
  this.bowls -= 1;
  if((this.score === 10) || (this.bowls === 0)) {
    this.frame += 1;
  };
};
