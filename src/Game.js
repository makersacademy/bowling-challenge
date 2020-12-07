'use strict';

class Game {
  constructor(frames = new Frame) {
    this._frames = [frames];
  };

  frames() {
    return this._frames;
  }

  roll(pins) {
    if (!this.currentFrame().isInPlay() && this.frameCount() <= 9) {
      this._newFrame();
      this.currentFrame().knocked(pins);
      this._doubleStrikeBonus(pins);
      this._strikeBonus(pins);
      this._spareBonus(pins);
      return;
    } else if (this.currentFrame().isInPlay() && this.frameCount() <= 9) {
      this.currentFrame().knocked(pins);
      this._strikeBonus(pins);
      return;
    } else if (this.currentFrame().isInPlay() && this.frameCount() === 10) {
      this.currentFrame().knocked(pins);
      return;
    };
  };

  totalScore(array = this.frames()) {
    var total = 0;
    for ( var i = 0, _len = array.length; i < _len; i++ ) {
        total += array[i]._score
    }
    return total;
  }
 
  currentFrame() {
    return this._frames[this._frames.length - 1];
  };

  _lastFrame() {
    return this._frames[this._frames.length - 2];
  };

  _spareBonus(pins) {
    if (this._isFirstFrame()){
      return;
    } else if (this._lastFrame().isSpare() === true) {
      this._lastFrame().pointBonus(pins);
    };
  };

  _strikeBonus(pins) {
    if (this._isFirstFrame()){
      return;
    } else if (this._lastFrame().isStrike()) {
      this._lastFrame().pointBonus(pins);
    };
  };

  _doubleStrikeBonus(pins) {
    if (this._isFirstFrame()){
      return;
    } else if (this._lastFrame().isStrike() && pins === 10) {
      this._lastFrame().pointBonus(pins);
    }
  }

  _newFrame() {
    if (this.frameCount() < 9) {
      this._frames.push(new Frame());
    } else if (this.frameCount() === 9) {
      this._frames.push(new Frame(true));
    };
  };

  frameCount() {
    return this._frames.length;
  };

  _isFirstFrame() {
   return this.frameCount() === 1;
  };

};