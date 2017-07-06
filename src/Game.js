function Game() {
  this.frames = [];
  this.currentRound = 1;
}

Game.prototype.throwFirstBall = function(pins) {
  this.frames.push([pins]);
};

Game.prototype.throwSecondBall = function(pins) {
  this.frames[this.currentRound - 1].push(pins);
  this.currentRound++;
};
