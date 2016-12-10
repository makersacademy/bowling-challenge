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

Game.prototype.inputThirdThrow = function(number) {
  this.frameScore.push(number);
}

Game.prototype.addToScoreArray = function(score) {
  this.scoreArray.push(this.frameScore);
};
