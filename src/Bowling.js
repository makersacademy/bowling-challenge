var Bowling = function() {
  this.frameNb = 0;
  this.pins = 10;
  this.rollNb = 0;
  this.points = 0;
  this.totalScore = 0;
};


Bowling.prototype.throw = function() {
  this.rollNb += 1;
  this.points = this.rollScore();
  return this.points;
};

Bowling.prototype.rollScore = function() {
  return Math.floor(Math.random()*11);
};

Bowling.prototype.UpdateScore = function() {
    return this.totalScore += this.points
};

