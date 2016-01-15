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
      this._getSpare();
      }
  if (this._isFirstFrame) {
  this._frames[this._framesSize()+1] = {rolls: [this.firstRoll,this.secondRoll],
      accumulator: this.frame.getFrameInfo().score,
      bonus: this.frame.getFrameInfo().bonus};
  }else {
    if (this._isBonus()) {
      this._addBonus();
    }else {
      this._addNoBonus();
    }
  }
};

Game.prototype._getSpare = function () {
  if (this._isSpare()) {
    this.frame.roll(this.firstRoll);
    this._accumulator[this._accumulator.length-1] += this.firstRoll;
  } else {
    this._setFrame();
  }
};

Game.prototype._addNoBonus = function () {
  this._frames[this._framesSize()+1] = {rolls: [this.firstRoll,this.secondRoll],
 accumulator: (this._frames[this._framesSize()].accumulator+this._frameScore()),
                                        bonus: this.frame.getFrameInfo().bonus};
};

Game.prototype._addBonus = function () {
  this._frames[this._framesSize()].accumulator += this._Bonus();
  this._frames[this._framesSize()+1] = {rolls: [this.firstRoll,this.secondRoll],
 accumulator: (this._frames[this._framesSize()].accumulator+this._frameScore()),
    bonus: this.frame.getFrameInfo().bonus};
};

Game.prototype._frameScore = function () {
  return this.firstRoll + this.secondRoll;
};

Game.prototype._Bonus = function () {
  var _bonusScore = this._frames[this._framesSize()].bonus;
  if (_bonusScore === 'strike') {
    return this.firstRoll + this.secondRoll;
  } else if (_bonusScore === 'spare') {
    return this.firstRoll;
  } else {
    return 0;
  }
};

Game.prototype._isFirstFrame = function () {
  return this._framesSize() < 1;
};

Game.prototype.getTotal = function () {
  return this._frames[10].accumulator;
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
