function Game(frame) {
  this.frame = new Frame();
  this.firstRoll = 0;
  this.secondRoll = 0;
  this.thirdRoll = 0;
  this._frames = {};
}

Game.prototype.getGameInfo = function () {
  return this._frames;
};

Game.prototype.storeFrame = function () {
  if (this._framesSize() < 1) {
    this._setFrame();
  this._frames[this._framesSize()+1] = {rolls: [this.firstRoll,this.secondRoll],
      accumulator: this._frameScore(),
      bonus: this.frame.getFrameInfo().bonus};
  }else {
    if ((this._framesSize()+1) < 10 ) {
      if (this._isBonus()) {
        this._setFrame();
        this._addBonus();
      }else {
        this._setFrame();
        this._addNoBonus();
      }
    } else {
        if (this.firstRoll === 10 || this._frameScore() === 10) {
          this._setFrame();
          this._addBonus();
          this._frames[this._framesSize()].accumulator += this.thirdRoll;
        } else {
          if (this._frames[this._framesSize()-1].bonus !== null || this._frames[this._framesSize()].bonus !== null) {
            this._setFrame();
            this._addBonus();
          } else {
            this._setFrame();
            this._addNoBonus();
          }
        }
    }
  }
  this.frame.setDefaultValues();
};

Game.prototype._isBonus = function () {
  return this._frames[this._framesSize()].bonus !== null;
};

Game.prototype._addNoBonus = function () {
  this._frames[this._framesSize()+1] = {rolls: [this.firstRoll,this.secondRoll],
 accumulator: (this._frames[this._framesSize()].accumulator+this._frameScore()),
                                        bonus: this.frame.getFrameInfo().bonus};
};

Game.prototype._addBonus = function () {
  if (this._isSpare()) {
    this._frames[this._framesSize()].accumulator += this._Bonus();
    this._frames[this._framesSize()+1]={rolls: [this.firstRoll,this.secondRoll],
      accumulator: (this._frames[this._framesSize()].accumulator+this._frameScore()),
      bonus: this.frame.getFrameInfo().bonus};
  } else {
    if (this._framesSize() < 2 || this._frames[this._framesSize()-1].bonus !== 'strike') {
      this._frames[this._framesSize()].accumulator += this.firstRoll+this.secondRoll;
      this._frames[this._framesSize()+1]={rolls: [this.firstRoll,this.secondRoll],
            accumulator: (this._frames[this._framesSize()].accumulator+this._frameScore()),
            bonus: this.frame.getFrameInfo().bonus};
    } else {
        this._frames[this._framesSize()-1].accumulator += this.firstRoll;
        this._frames[this._framesSize()].accumulator += (this.firstRoll + this._frameScore());
        this._frames[this._framesSize()+1]={rolls: [this.firstRoll,this.secondRoll],
          accumulator: (this._frames[this._framesSize()].accumulator+this._frameScore()),
          bonus: this.frame.getFrameInfo().bonus};
    }
  }
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

Game.prototype.getTotal = function () {
  return this._frames[this._framesSize()].accumulator;
};

Game.prototype._setFrame = function () {
  this.frame.roll(this.firstRoll);
  this.frame.roll(this.secondRoll);
};

Game.prototype._isSpare = function () {
  if (this._framesSize() < 1) {
    return false;
  } else {
    return this._frames[this._framesSize()].bonus === 'spare';
  }
};

Game.prototype._framesSize = function () {
  return Object.keys(this._frames).length;
};
