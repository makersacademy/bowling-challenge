var Game = function() {
  this._frames = [];
};

Game.prototype.addFrame = function (frame) {
  this._frames.push(frame);
};

Game.prototype.frameTotal = function (frameNum, ball1, ball2) {
  // return this._frames[0].score;
  this._frames[frameNum] = ball1 + ball2;
  return this._frames[frameNum];
};
