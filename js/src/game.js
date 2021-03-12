class Game {
  constructor(frameClass = Frame) {
    this.FRAME_CLASS = frameClass;
    this.frames = [];
    this._newFrame();
  }
s
  addRoll(pins) {
    this._currentFrame().addRoll(pins);
  }

  _currentFrame() {
    return this.frames[this.frames.length - 1];
  }

  _newFrame() {
    this.frames.push(new this.FRAME_CLASS);
  }
}
