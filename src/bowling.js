function Game() {
  this.points = 0
}
Game.prototype.add = function(points) {
  this.points += points;
  return this.points;
};