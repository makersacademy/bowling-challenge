class Frame {

  constructor() {
    this._frame = 1
    this._roll = 1
  }

  currentFrame() {
    return this._frame 
  }

  addFrame() {
    this._frame += 1
  }

  currentRoll() {
    return this._roll
  }

  nextRoll() {
    if(this._roll === 1) {
      this._roll = 2
    } else {
      this._roll = 1
      this._frame += 1
    }
  }

  isOnFinalFrame() {
    if(this._frame === 10) {
      return true;
    } else {
      return false;
    };
  }
}
