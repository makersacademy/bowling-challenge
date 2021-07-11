
class Bowling {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
    if(this.frames.length > 1 && this._isSpare()) {
      this._addSpareBonus();
    } else if (this.frames.length >= 2 && this._isStrike()) {
      this._addStrikeBonus();
    }
  }
  score() {
    return this.frames.map(frame => frame.reduce((num, i) => num = num + i))
  }
  _addSpareBonus() {
    this._secondLastFrame().push(this._lastFrame()[0]);
  }

  _addStrikeBonus() {
    this._secondLastFrame().push(this._lastFrame().reduce((num, i) => num = num + i));
    if (this._calcFrame(this._secondLastFrame()) === 20 && this._calcFrame(this._lastFrame()) == 10) {
      if(this._thirdLastFrame() === undefined) {
        this.frames[0].push(10);
      } else {
        this._secondLastFrame().push(10);
      }
    }
  }

  _lastFrame() {
    return this.frames[this.frames.length -1]
  }

  _secondLastFrame() {
    return this.frames[this.frames.length -2]
  }

  _thirdLastFrame() {
    return this.frames[this.frames.length - 3]
  }

  _calcFrame(theFrame) {
    return theFrame.reduce((frame, index) => frame += index)
  }

  _isSpare() {
    if (this._secondLastFrame().length > 1 && this._calcFrame(this._secondLastFrame()) == 10) {
      return true;
    } else {
      return false;
    }
  }

  _isStrike() {
    if (this._secondLastFrame().length === 1 && this._calcFrame(this._secondLastFrame()) == 10) {
      return true;
    } else {
      return false;
    }
  }
}