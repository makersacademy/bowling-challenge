class Game {
  constructor(frameClass = Frame) {
    this.FRAME_CLASS = frameClass;
    this.frames = [];
    this._newFrame();
  }

  addRoll(pins) {
    this._currentFrame().addRoll(pins);
    if(this._currentFrame().isOver()) {
      this._newFrame();
    }
  }

  _currentFrame() {
    return this.frames[this.frames.length - 1];
  }

  _newFrame() {
    this.frames.push(new this.FRAME_CLASS);
  }
}
