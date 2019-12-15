function Game() {
  this.points = 0
  this.frame = 1
}

Game.prototype.add = function(points) {
  if(this.points != 0) this.frame ++
  this.points += points;
};

Game.prototype.reset = function() {
  this.points = 0
  this.frame = 1
};