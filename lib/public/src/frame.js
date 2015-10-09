var game = new Game;

function Frame() {
  this.currentFrame = [];
  this.strike = false;
  this.spare = false;

  // this.twoRollsAgo = 0;
  // this.previousRoll = 0;
  // this.currentRoll = 0;
};

Frame.prototype.bowl = function(score) {
  if (game.gameArray.length < 9) this.scoreChecker(score);
  if (this.currentFrame.length < 1 && score !== 10) {
    this.currentFrame.push(score);
  } else if (score === 10 && game.gameArray.length < 9) {
    this.currentFrame.push(score);
    this.clearCurrentFrame(score);
  } else if (game.gameArray.length < 9)  {
    this.currentFrame.push(score);
    this.clearCurrentFrame(score);
  } else {
    this.lastFrame(score);
  }
};

Frame.prototype.lastFrame = function(score) {
  this.finalScoreChecker(score);
  if (score === 10 && this.currentFrame.length < 2) {
    this.currentFrame.push(score);
  } else if (score < 10 && this.currentFrame.length < 1) {
    this.currentFrame.push(score);
  } else if ((this.currentFrame[0] + score) < 10) {
    this.currentFrame.push(score);
    this.clearCurrentFrame(score);
  } else if ((this.currentFrame.length) === 2) {
    this.currentFrame.push(score);
    this.clearCurrentFrame(score);
  } else {
    this.currentFrame.push(score);
  }
};

Frame.prototype.clearCurrentFrame = function(score) {
  if (game.gameArray.length >= 2 && (game.twoFramesAgo() && game.isStrike())) {
    console.log('double');
    game.previousFrame().push(this.currentFrame[0]);
    game.twoFramesAgo().push(this.currentFrame[0]);
    game.gameArray.push(this.currentFrame);
    game.scoreCalculator();
    this.currentFrame = [];
  } else if (game.gameArray.length >= 1 && game.isStrike()) {
    console.log('strike');
    game.previousFrame().push(this.currentFrame[0]);
    game.previousFrame().push(this.currentFrame[1]);
    game.gameArray.push(this.currentFrame);
    game.scoreCalculator();
    this.currentFrame = [];
  } else if (game.gameArray.length >= 1 && game.isSpare()) {
    game.previousFrame().push(this.currentFrame[0]);
    game.gameArray.push(this.currentFrame);
    game.scoreCalculator();
    this.currentFrame = [];
  } else {
    console.log('else');
    game.gameArray.push(this.currentFrame);
    game.scoreCalculator();
    this.currentFrame = [];
  }
};

Frame.prototype.scoreChecker = function(score) {
  if (score > 10) throw ('Cannot exceed the maximum of ten pins!');
  if (this.currentFrame[0] + score > 10) throw ('Cannot exceed the maximum of ten pins!');
};

Frame.prototype.finalScoreChecker = function(score) {
  if (score > 10) {
    throw ('Cannot exceed the maximum of ten pins!');
  } else if ((this.currentFrame[0] !== 10) && (this.currentFrame.length === 1 && this.currentFrame[0] + score > 10)) {
    throw ('Cannot exceed the maximum of ten pins!');
  }
};
