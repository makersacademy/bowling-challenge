var Bowling = function() {
  this.frameNb = 0;
  this.pins = 10;
  this.rollNb = 0;
  this.points = 0;
  this.frameHist = [];
  this.scoreHist = [];
  this.totalScore = 0;
};


Bowling.prototype.throw = function() {
  while(this.rollNb < 2) {
    this.rollNb += 1;
    this.points = this.rollScore();
    this.UpdateHist();
    this.UpdateScore();
  };
  return this.points;
};

Bowling.prototype.rollScore = function() {
  return Math.floor(Math.random()*11);
};

Bowling.prototype.UpdateHist = function() {
  return this.frameHist.push(this.points);
};

Bowling.prototype.UpdateScore = function() {
  return this.totalScore += this.points
};

Bowling.prototype.play = function() {
  while(this.frameNb < 10) {
    this.frameHist = [];
    this.rollNb = 0;
    this.throw();
    this.scoreHist.push(this.frameHist);
    this.frameNb += 1;
  };
  return this.frameNb;
};
