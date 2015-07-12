function Game() {
  this.score = 0;
  this.pins = 10;
}

Game.prototype.bowl = function(max) {
  turn = Math.floor(Math.random() * (max + 1));
  this.score += turn;
  this.pins -= turn;
};