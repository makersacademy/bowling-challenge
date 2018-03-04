// The game class holds the frames and asks the frame questions. When the frame
// achieves a certain condition the game adds the frame total score to the
// game score attribute
var Game = function() {
  this._frames = [];
  this.btns;
};

Game.prototype.addFrame = function (frame) {
  this._frames.push(frame);
};

Game.prototype.frameTotal = function (frameNum) {
  // return this._frames[0].score;
  if (this._frames[frameNum].strike === 'strike') {
    return 'strike';
  } else if (this._frames[frameNum].spare === 'spare') {
    return 'spare';
  };
  return this._frames[frameNum].score = this._frames[frameNum].ball1 + this._frames[frameNum].ball2;
};

Game.prototype.strike = function (frameNum, nextBall, nextBall2) {
  return this._frames[frameNum.score] = 10 + nextBall + nextBall2;
};

Game.prototype.spare = function (frameNum, nextBall) {
  return this._frames[frameNum.score] = 10 + nextBall;
};

Game.prototype.getFrames = function () {
  return this._frames;
};

Game.prototype.getFrame = function (frameNum) {
  return this._frames[frameNum];
};

Game.prototype.getBall1 = function () {

};
