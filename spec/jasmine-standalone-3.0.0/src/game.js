var Game = function() {
  this._frames = [];
};

Game.prototype.addFrame = function (frame) {
  this._frames.push(frame);
};

Game.prototype.frameTotal = function (frameNum) {
  console.log(this._frames[0].score);
  return this._frames[0].score;
};
