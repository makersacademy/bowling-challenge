'use strict';

class Game {
  constructor(frames = new Frame) {
    this._frames = [frames];
  };

  frames() {
    return this._frames;
  }

  roll(pins) {
    if (!this._currentFrame().isInPlay() && this._frameCount() <= 9) {
      this._newFrame();
      this._currentFrame().knocked(pins);
      this._doubleStrikeBonus(pins);
      this._strikeBonus(pins);
      this._spareBonus(pins);
      return;
    } else if (this._currentFrame().isInPlay() && this._frameCount() <= 9) {
      this._currentFrame().knocked(pins);
      this._strikeBonus(pins);
      return;
    } else if (this._currentFrame().isInPlay() && this._frameCount() === 10) {
      this._currentFrame().knocked(pins);
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
 
  _currentFrame() {
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
    if (this._frameCount() < 9) {
      this._frames.push(new Frame());
    } else if (this._frameCount() === 9) {
      this._frames.push(new Frame(true));
    };
  };

  _frameCount() {
    return this._frames.length;
  };

  _isFirstFrame() {
   return this._frameCount() === 1;
  };

};