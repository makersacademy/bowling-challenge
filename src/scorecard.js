function Scorecard() {
  this.currentScore = 0;
  this.currentFrame = [];
  this.currentGame = ["Start"];
  this.frame = 1;
  this.spare = false;
}

Scorecard.prototype.addRoll = function (number) {

  this.currentFrame.push(number);

  if (this.currentFrame.length === 2) {
    if (this.wasLastFrameSpare()) {
      this.currentScore += this.currentFrame[0]
      this.spare = false;
    }
    this.calcCurrentScore();
    this.pushFrameToGame();
    if (this.currentFrame[0] + this.currentFrame[1] === 10) {
      this.spare = true;
    }
    this.currentFrame = [];
    this.frame++
  }
}

Scorecard.prototype.calcCurrentScore = function () {
  var frameSum = 0;

  this.currentFrame.map(function (i) {
    frameSum += i;
  });

  this.currentScore += frameSum;
}

Scorecard.prototype.pushFrameToGame = function () {
  this.currentGame.push(new Array(this.currentFrame[0], this.currentFrame[1]));
}

Scorecard.prototype.wasLastFrameSpare = function () {
  return this.spare;
}