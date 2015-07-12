function Game() {
  this.score = 0
}

Game.prototype.updateScore = function (pinsDown) {
  this.score += parseInt(pinsDown);
  return this.score;
};
