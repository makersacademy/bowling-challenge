function Game() {
  this.points = 0;
  this.frame = 1;
  this.roll = 1;
}

Game.prototype.add = function(points) {
  if(this.points != 0) this.frame ++
  this.roll ++;
  this.points += points;
};

Game.prototype.reset = function() {
  this.points = 0
  this.frame = 1
};