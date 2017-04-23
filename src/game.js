function Game() {
  this.frames = [];
  this.currentFrame = new Frame();
  // below default pins can go once non-randomised
  this.MAX_FRAMES = 10;
  this.gameScore = 0;
}

Game.prototype.getCurrentFrame = function getCurrentFrame() {
  return this.currentFrame;
};

Game.prototype.addFrame = function addFrame(frame) {
  this.frames.push(frame);
};

Game.prototype.getCurrentScore = function getCurrentScore() {
  return this.gameScore;
};

Game.prototype.resetFrame = function resetFrame() {
  this.addFrame(this.currentFrame);
  this.currentFrame = new Frame();
};

Game.prototype.updateGameScore = function updateGameScore() {
  // adding the total frame score twice!!
  this.gameScore += this.currentFrame.frameScore();
};

Game.prototype.resetGame = function resetFrame() {
  this.currentFrame = new Frame();
  this.frames = [];
  this.gameScore = 0;
};

Game.prototype.bowl = function bowl(pins) {
  if (this.currentFrame.isFirstBowl()) {
    this.currentFrame.bowl(pins);

    if (this.currentFrame.isStrike()) {
      this.currentFrame.bowl(0);
      this.updateGameScore();
      this.resetFrame();
    }
  } else if (this.currentFrame.canBowl()) {
    this.currentFrame.bowl(pins);

    if (this.currentFrame.isSpare()) {
      this.updateGameScore();
      this.resetFrame();
    } else {
      this.updateGameScore();
      this.resetFrame();
    }
  } else {
    this.resetFrame();
    this.currentFrame.bowl(pins);
  }
};

  // } else {
  //   this.resetFrame();
  //   this.currentFrame.bowl(pins);
  // }



Game.prototype.getFrameNumber = function getFrameNumber() {
  return (this.frames.length + 1);
};
