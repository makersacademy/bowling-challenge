class Bowling {
  constructor() {
    this.bonus = 0;
    this.total = 0;
    this.frame = 1;
    this.currentFrame = [];
  }

  addRoll(pins) {
    var score = 0;
    if(!this._isGameContinues()) throw new Error('The game is over!');

    this._isBonus() ? score = this._multiplier(pins) : score = pins;

    this._applyScore(pins, score);
    if(this._isEndOfFrame()) this._endFrame();
  }

  _endFrame() {
    if(this._isSpare()) this.bonus++;
    if(this._isStrike()) this.bonus = this.bonus + 2;
    this.currentFrame = [];
    this.frame++;
  }

  _multiplier(pins) {
    var newScore = 0
    this._isDoubleBonus() ? newScore = pins * 3 : newScore = pins * 2;
    return newScore
  }

  _applyScore(pins, score) {
    if(this._isDoubleBonus()) {
      this.bonus = this.bonus - 2;
    } else if(this._isBonus()) {
      this.bonus--;
    }
    this.total = this.total + score;
    this.currentFrame.push(pins);
  }

  _isEndOfFrame() {
    if(this.frame < 10) {
      if(this.currentFrame.length === 2 || this._currentFrameSum() === 10) {
        return true;
      } else {
        return false;
      }
    } else {
      if(this.currentFrame.length === 3 && this._currentFrameSum() >= 10) {
        return true;
      } else {
        return false;
      }
    }
  }

  _isSpare() {
    if(this.currentFrame.length === 2 && this._currentFrameSum() === 10) {
      return true;
    } else {
      return false;
    }
  }

  _isStrike() {
    if(this.currentFrame.length === 1 && this.currentFrame[0] === 10) {
      return true;
    } else {
      return false;
    }
  }

  _isBonus() {
    if(this.bonus > 0) {
      return true;
    } else {
      return false;
    }
  }

  _isDoubleBonus() {
    if (this.bonus >= 3) {
      return true;
    } else {
      return false;
    }
  }

   _isGameContinues() {
    if(this.frame < 10 || (this.frame === 10 && this._isTenthFrameException())) {
      return true;
    } else {
      return false;
    }
  }

  _isTenthFrameException() {
    if(this.currentFrame.length < 2 || (this._currentFrameSum() >= 10 && this.currentFrame.length < 3)) {
      return true;
    } else {
      return false;
    }
  }

  _currentFrameSum() {
    return this.currentFrame.reduce((a, b) => a + b, 0);
  }
}
