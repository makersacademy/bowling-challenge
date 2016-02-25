function Game() {
  this._frames = [];
  this._scores = [];
  this._frameNumber = 0;
}

Game.prototype.addFrame = function(frame) {
  if (this._frameNumber < 10) {
    this._frames.push(frame)
    this._frameNumber ++
  } else {
    throw new Error("10 frames per match only!")
  };
};
