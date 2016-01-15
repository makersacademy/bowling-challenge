function Game(frame) {
  this.frame = new Frame();
  this.firstRoll = 0;
  this.secondRoll = 0;
  this._frames = {};
  this._accumulator = [];
}

Game.prototype.getGameInfo = function () {
  return {frames: this._frames, accumulator: this._accumulator};
};

Game.prototype.storeFrame = function () {
  if (this.firstRoll === 10) {
    this.frame.roll(this.firstRoll);
    this.frame.roll(this.secondRoll);
  } else {
    this.frame.roll(this.firstRoll);
    this.frame.roll(this.secondRoll);
  }
  this._frames[Object.keys(this._frames).length+1] =
                                            this.frame.getFrameInfo().rolls;
  this._accumulator.push(this.frame.getFrameInfo().score);
  this.frame.setDefaultValues();
};

Game.prototype.getTotal = function () {
  return this._accumulator.reduce((a,b) => a+b);
};
