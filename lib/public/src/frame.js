var game = new Game;

function Frame() {
  this.currentFrame = [];
  this.lastBowl;
};

Frame.prototype.bowl = function(score) {
  this.lastBowl = score;
  this.gameEnd();
  if (game.gameArray.length < 9) this.scoreChecker(score);
  if (this.isUnderTen(score)) {
    this.addToFrame(score);
  } else if (this.isAStrike(score)) {
    this.addToFrame(score);
    this.calculateFrame(score);
  } else if (game.gameArray.length < 9)  {
    this.addToFrame(score);
    this.calculateFrame(score);
  } else {
    this.lastFrame(score);
  }
};

Frame.prototype.lastFrame = function(score) {
  this.finalScoreChecker(score);
  if (score === 10 && this.currentFrame.length < 2) {
    this.addToFrame(score);
  } else if (score < 10 && this.currentFrame.length < 1) {
    this.addToFrame(score);
  } else if ((this.currentFrame[0] + score) < 10) {
    this.addToFrame(score);
    this.calculateFrame(score);
  } else if ((this.currentFrame.length) === 2) {
    this.addToFrame(score);
    this.calculateFrame(score);
  } else {
    this.addToFrame(score);
  }
};

Frame.prototype.calculateFrame = function(score) {
  if ((game.gameArray.length >= 2 && score === 10) && (game.previousFrame().indexOf(10) === 0 && game.twoFramesAgo().indexOf(10) === 0)) {
    console.log('double');
    game.previousFrame().push(this.currentFrame[0]);
    game.twoFramesAgo().push(this.currentFrame[0]);
    if (game.gameArray.length === 9) game.previousFrame().push(this.currentFrame[0]);
    game.gameArray.push(this.currentFrame);
    game.scoreCalculator();
    this.currentFrame = [];
  } else if ((game.gameArray.length >= 2 && score !== 10) && (game.previousFrame().indexOf(10) === 0 && game.twoFramesAgo().indexOf(10) === 0)) {
    console.log('double, then shit');
    game.previousFrame().push(this.currentFrame[0]);
    game.previousFrame().push(this.currentFrame[1]);
    game.twoFramesAgo().push(this.currentFrame[0]);
    game.gameArray.push(this.currentFrame);
    game.scoreCalculator();
    this.currentFrame = [];
  } else if (game.gameArray.length >= 1 && (game.isStrike() && this.currentFrame.indexOf(10) !== 0)) {
    console.log('strike');
    game.previousFrame().push(this.currentFrame[0]);
    game.previousFrame().push(this.currentFrame[1]);
    game.gameArray.push(this.currentFrame);
    game.scoreCalculator();
    this.currentFrame = [];
  } else if (game.gameArray.length >= 1 && game.previousFrame().indexOf(10) === 0) {
    console.log('strike, and before');
    game.previousFrame().push(this.currentFrame[0]);
    if (game.gameArray.length === 9) game.previousFrame().push(this.currentFrame[0]);
    game.gameArray.push(this.currentFrame);
    game.scoreCalculator();
    this.currentFrame = [];
  } else if (game.gameArray.length >= 1 && game.isSpare()) {
    console.log('spare');
    this.scoreSpare();
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

Frame.prototype.gameEnd = function() {
  if (game.gameArray.length === 10) throw ('Game is over!');
};

Frame.prototype.isUnderTen = function(score) {
  if (this.currentFrame.length < 1 && score !== 10) return true;
};

Frame.prototype.isAStrike = function(score) {
  if (score === 10 && game.gameArray.length < 9) return true;
};

Frame.prototype.addToFrame = function(score) {
  this.currentFrame.push(score);
};

Frame.prototype.scoreSpare = function(score) {
  game.previousFrame().push(this.currentFrame[0]);
  game.gameArray.push(this.currentFrame);
  game.scoreCalculator();
  this.currentFrame = [];
};
