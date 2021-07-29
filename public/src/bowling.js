const FRAMES_PER_GAME = 10;
const ALL_PINS = 10;

class Bowling {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.length < FRAMES_PER_GAME ? this.frames.push(frame) : this._finalFrame(frame); 
    if (this.frames.length > 2 && this._isStrike()) {
      this._addStrikeBonus(this._calcFrame(frame));
    } else if (this.frames.length > 1 && this._secondLastFrame().length <= 1 ) {
      this._secondLastFrame().push(frame[0]);
      if (this._secondLastFrame()[0] != ALL_PINS) { this.frames.pop() }
    } else if (this.frames.length > 1 && this._isSpare()) {
      this._addSpareBonus();
    }
    }
  
  score() {
    return this.frameScores().reduce((frame, index) => frame = frame + index, 0);
  }

  frameScores() {
    return this.frames.map(frame => frame.reduce((num, i) => num = num + i))
  }

  _addSpareBonus() {
    if (this._secondLastFrame().length > 1 && this._calcFrame(this._secondLastFrame()) === 10) {
      this._secondLastFrame().push(this._lastFrame()[0]) 
    }
  }

  _addStrikeBonus(frame) {
    if (this._thirdLastFrame().length < 3 && this._calcFrame(this._thirdLastFrame()) != 20) {
      this._thirdLastFrame().push(this._lastFrame()[0]); this._secondLastFrame().push(this._lastFrame()[0])
      this.frames.pop();
    } else if (this._theLastTwoFramesAreAPerfectScore()) {
      this._secondLastFrame().push(frame)
      this._thirdLastFrame().push(this._lastFrame()[0])
    }
  }

  _theLastTwoFramesAreAPerfectScore() {
    return this._calcFrame(this._thirdLastFrame()) === 20 && this._lastFrame()[0] == ALL_PINS
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
    return theFrame.reduce((frame, index) => frame += index, 0)
  }

  _isSpare() {
    if (this._secondLastFrame().length > 1 && this._calcFrame(this._secondLastFrame()) == ALL_PINS) {
      return true;
    } else {
      return false;
    }
  }

  _isStrike() {
    return this._thirdLastFrame()[0] >= ALL_PINS ? true : false;
  }

  _finalFrameStrike() {
    return this._lastFrame()[0] === ALL_PINS && this._lastFrame().length < 3
  }

  _finalFrame(frame) {
    if (this._lastFrame().length < 2 || this._calcFrame(this._lastFrame()) === ALL_PINS) {
      this._lastFrame().push(frame[0]);
    } else if (this._lastFrame().length === 3 || this._finalFrameStrike()) {
      this._lastFrame().push(frame[0]);
    } 
  }

  interfaceFrames() {
    return ['#one', '#two', '#three', '#four', '#five',
     '#six', '#seven', '#eight', '#nine', '#ten'];
  }

  endGame() {
    this.frames = []
  }
}