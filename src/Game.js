// calculates score

function Game() {}

Game.prototype.startGame = function() {
  this.scoreArray = [];
  this.numberOfFramesRemaining = 10;
};

Game.prototype.inputFirstThrow = function(number) {
    this.frameScore = [number];
};

Game.prototype.inputSecondThrow = function(number) {
  this.frameScore.push(number);
};
