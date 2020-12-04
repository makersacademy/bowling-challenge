'use strict';

class Game {
  constructor(frames = new Frame) {
    this._frames = [frames];
  };

  frames() {
    return this._frames;
  }

  roll() {
   return "hello"
  }


  _currentFrame () {
    return this._frames[this._frames.length - 1]
  }

}