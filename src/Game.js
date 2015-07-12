function Game() {
  this.score = 0;
}

Game.prototype.bowl = function() {
  return Math.floor(Math.random() * 11);
};