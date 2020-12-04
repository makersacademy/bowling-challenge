'use strict';

class Game {
  constructor(frames = new Frame) {
    this._frames = [frames];
  };

  frames() {
    return this._frames;
  }

  roll(pins) {
    if (this._currentFrame().isInPlay() === false) {
      var newFrame = this._newFrame();
      newFrame.knocked(pins);
      this._frames.push(newFrame);
    } else {
      this._currentFrame().knocked(pins);
    };
  };


  _currentFrame() {
    return this._frames[this._frames.length - 1]
  };


  _newFrame() {
    return new Frame()
  }


};