// calculates score

function Game() {}

Game.prototype.startGame = function() {
  this.scoreArray = [];
  this.numberOfFramesRemaining = 10;
};

Game.prototype.inputFirstFrame = function(number) {
    this.frameScore = [number];
}
