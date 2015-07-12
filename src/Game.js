function Game() {
  this.score = 0;
  this.pins = 10;
  this.scorecard = [[]];
  this.frame = 1;
  this.roll = 1;
}

Game.prototype.bowl = function(pins) {
  hit = Math.floor(Math.random() * (pins + 1));
  this.score += hit;
  this.pins -= hit;

  if (this.pins == 0) {
    if (hit == 10) {
      this.strike();
    }
    else {
      this.split();
    }
    this.frameReset();
  }
  else {
    this.recordScore();
  }
};

Game.prototype.strike = function() {
  this.scorecard[this.frame - 1][0] = 'X';
};

Game.prototype.split = function() {
  this.scorecard[this.frame - 1][1] = '/';
};

Game.prototype.recordScore = function() {
  this.scorecard[this.frame - 1][this.roll - 1] = hit;
  if (this.roll == 2) {
  	this.frameReset();
  }
  else {
    this.roll = 2;
  }
};

Game.prototype.frameReset = function() {
  this.frame += 1;
  this.pins = 10;
  this.roll = 1;
};