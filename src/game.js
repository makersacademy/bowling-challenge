function Game() {
  this.frames = [];
  this._scores = [];
  this._frameNumber = 0;
}

Game.prototype.addFrame = function(frame) {
  if (this._frameNumber < 10) {
    this.frames.push(frame)
    this.calcScores(frame);
    this._frameNumber ++
  } else {
    throw new Error("10 frames per match only!")
  };
};

Game.prototype.calcScores = function(frame) {
  this.roll1 = frame.checkRoll()[0];
  this.roll2 = frame.checkRoll()[1] || 0;
  this._scores[this._frameNumber] = this.roll1 + this.roll2
};
