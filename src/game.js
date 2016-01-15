function Game(frame) {
  this.frame = new Frame();
  this.firstRoll = 0;
  this.secondRoll = 0;
  this._frames = {};
}

Game.prototype.getGameInfo = function () {
  return this._frames;
};

Game.prototype.storeFrame = function () {
  if (this.firstRoll === 10) {
    this._setFrame();
  } else {
      if (this._isSpare()) {
        this.frame.roll(this.firstRoll);
        this._accumulator[this._accumulator.length-1] += this.firstRoll;
      } else {
        this._setFrame();
      }
  }
  this._frames[this._framesSize()+1] = {rolls: [this.firstRoll,this.secondRoll],
                                   accumulator: this.frame.getFrameInfo().score,
                                   bonus: this.frame.getFrameInfo().bonus};

  this.frame.setDefaultValues();
};

Game.prototype.getTotal = function () {
  return this._accumulator.reduce((a,b) => a+b);
};

Game.prototype._setFrame = function () {
  this.frame.roll(this.firstRoll);
  this.frame.roll(this.secondRoll);
};

Game.prototype._isSpare = function () {
  return false;
};

Game.prototype._framesSize = function () {
  return Object.keys(this._frames).length;
};
