function Game() {
  this.totalPoints = 0;
  this.framePoints = 0;
  this.frame = 1;
  this.roll = 1;
}

Game.prototype.add = function(points) {
  (this.roll == 2 || points == 10) ? this.nextFrame() : this.roll ++;
  this.totalPoints += points;
};

Game.prototype.reset = function() {
  this.totalPoints = 0;
  this.framePoints = 0;
  this.frame = 1;
  this.roll = 1;
};

Game.prototype.nextFrame = function() {
  this.frame ++;
  this.roll = 1;
}

