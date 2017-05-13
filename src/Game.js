function Game() {
  this.frameNumber = 1;
  this.score = new Score();
};

Game.prototype.bowl = function(n) {
  this.frameNumber = this.score.card.length + 1;
  this.score.bowl(n);
  this._checkStatus();
};

Game.prototype.checkScore = function() {
  return this.score.total;
}

// Private

Game.prototype._checkStatus = function() {
  if (this.score.card.length === 10 && this.score.frame.position === 2) {
    console.log('Game ended');
    this._restart();
  };
};

Game.prototype._restart = function() {
  this.score = new Score();
  this.frameNumber = 1;
}

Game.prototype._position = function() {
  return this.score.frame.position;
}
