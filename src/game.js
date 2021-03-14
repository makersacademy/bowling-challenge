class Game {
  constructor() {
    this.currentBowl = 1;
    this.currentFrame = 1;
    this.score = 0;
    this.frames = {};
  }

  enterPins(pins) {
    this.addBonusBowl(pins);
    if (this.currentBowl === 1) {
      let frame = this._addFrame(this.currentFrame);
      frame.addBowl(pins, this.currentBowl);
      if (this._isStrike(pins)) {
        this.currentFrame += 1;
      } else {
        this.currentBowl += 1;
      }
    } else if (this.currentBowl === 2) {
      let frame = this._getCurrentFrame();
      frame.addBowl(pins, this.currentBowl);
      this.currentFrame += 1;
      this.currentBowl = 1;
    }
  }

  addBonusBowl(pins) {
    const frames = Object.values(this.frames)
    for (const frame of frames) {
      if (frame.complete === false) {
        frame.addBonusPoints(pins)
      }
    }
  }

  _addFrame(number) {
    let frame = new Frame(number);
    let key = String(number);
    this.frames[key] = frame;
    return frame;
  }

  _getCurrentFrame() {
    let key = String(this.currentFrame);
    let frame = this.frames[key];
    return frame;
  }

  _isStrike(pins) {
    if (pins === 10) {
      return true;
    } else {
      return false;
    }
  }
}