

const FRAMES_PER_GAME = 10 

class Bowling {
  constructor() {
    this.frames = [];
    this.rollIndex = 0
  }

  score() {
    return this.frameScores().reduce((frame, index) => frame = frame + index);
  }

  addFrame(frame) {
    this.frames.length - 10 < FRAMES_PER_GAME ? this.frames.push(frame) : this._finalFrame(frame);
    // if (this.frames.length > 1 && this._isSpare()) {
    //     this._addSpareBonus();
    if (this.frames.length > 2 && this._isStrike()) {
      this._addStrikeBonus();
    } else if (this.frames.length > 1 && this._secondLastFrame().length <= 1 ) {
      this._secondLastFrame().push(this._lastFrame()[0]);
      this.frames.pop();
      if (this.frames.length > 1) {this._addSpareBonus()};
    }
    }
  

  frameScores() {
    return this.frames.map(frame => frame.reduce((num, i) => num = num + i))
  }

  _addSpareBonus() {
    if (this._secondLastFrame().length > 1 && this._calcFrame(this._secondLastFrame()) == 10) {this._secondLastFrame().push(this._lastFrame()[0]) }
  }

  _addStrikeBonus() {
    // //this._secondLastFrame().push(this._calcFrame(this._lastFrame()));
    // if (this._theLastTwoFramesAreAPerfectScore()) {
    //   if (this._thirdLastFrame() === undefined && this.frames.length > 2) {
    //     //this.frames[0].push(10);
    //   } else if (this._thirdLastFrame() != undefined) {
    //     this._thirdLastFrame().push(10);
    //   };
    // }
  }

  _theLastTwoFramesAreAPerfectScore() {
    return this._calcFrame(this._thirdLastFrame()) === 20 && this._lastFrame()[0] == 10
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

  _isNormalFrame() {
    return this._lastFrame()[0] + this._calcFrame(this._secondLastFrame()) < 10 ? true : false
  }

  _isSpare() {
    if (this._secondLastFrame().length > 1 && this._calcFrame(this._secondLastFrame()) == 10) {
      return true;
    } else {
      return false;
    }
  }

  _isStrike() {
    if (this._thirdLastFrame()[0] >= 10) {
      return true;
    } else {
      return false;
    }
  }

  _finalFrame(frame) {
    if (this._calcFrame(this._lastFrame()) < 10) {
      this._endGame()
    } else if (this._calcFrame(this._lastFrame()) === 20) {
      this._lastFrame().push(this._calcFrame(frame));
      this._endGame();
    } else {
      this._lastFrame().push(this._calcFrame(frame));
    }
  }

  interfaceFrames() {
    return ['#one', '#two', '#three', '#four', '#five',
     '#six', '#seven', '#eight', '#nine', '#ten']//[this.frameScores().length - 1];
  }

  _endGame() {
    return;
  }
}