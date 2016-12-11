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
if (this.frameScore[0] === 10) throw "Strike - Second fame not allowed";
if (this.frameScore[0] + number > 10) throw "Frame total must be 10 or lower";
  this.frameScore.push(number);
};

Game.prototype.inputThirdThrow = function(number) {
  this.frameScore.push(number);
}

Game.prototype.addToScoreArray = function(score) {
  this.scoreArray.push(this.frameScore);
};

Game.prototype.nextFrame = function() {
  if (this.numberOfFramesRemaining <= 0) throw "Too many frames";
  this.numberOfFramesRemaining -= 1;
};
