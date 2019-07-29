function Game() {
  this._maxNumberOfFrames = 10;
  this._frameNumber = 0;
  this._frames = [];
};

Game.prototype.maxNumberOfFrames = function () {
  return this._maxNumberOfFrames;
};

Game.prototype.add = function (frame) {
  this._frames.push(frame);
};

Game.prototype.frames = function () {
  return this._frames;
};

Game.prototype.currentFrame = function () {
  return this.frames().slice(-1)[0]
};

Game.prototype.isPreviousFrameStrike = function () {
  if (this._frameNumber > 1 ) {
    return this.frames().slice(-2)[0].isStrike();
  }
  return false;
};

Game.prototype.is2FrameBeforeStrike = function () {
  if (this._frameNumber > 2 ) {
    return this.frames().slice(-3)[0].isStrike();
  }
  return false;
};

Game.prototype.isPreviousFrameSpare = function () {
  return this.frames().slice(-2)[0].isSpare();
};

Game.prototype.bowl = function (pinsKnockedDown) {
  if (this.isFinished()) {
    throw new Error('Game is finished!')
  }
  this.currentFrame().bowl(pinsKnockedDown);
  this.addBonusPoints(pinsKnockedDown);
  this.createNewFrameifFinished();
};

Game.prototype.nthFrame = function (frame) {
  return this.frames()[frame - 1];
};

Game.prototype.checkFrame = function () {
  return this.currentFrame().isFinished();
};

Game.prototype.startFrame = function () {
  frame = new Frame();
  game.add(frame);
  game._frameNumber++
};

Game.prototype.createNewFrameifFinished = function () {
  if (this.checkFrame() && this._frameNumber < 10) {
    this.startFrame();
  }
};

Game.prototype.isFinished = function () {
  return (this.checkFrame() && this._frameNumber == 10);
};

Game.prototype.addBonusPoints = function (points) {
  if (this.isPreviousFrameStrike() && this.is2FrameBeforeStrike()) {
    this.frames().slice(-3)[0].addBonusPoints(points);
  }
  if (this.isPreviousFrameStrike()) {
    this.frames().slice(-2)[0].addBonusPoints(points);
  }
  if (this.isPreviousFrameSpare() && (this.currentFrame().lastBowl== null)) {
    this.frames().slice(-2)[0].addBonusPoints(points);
  }
};
