class Game {
  constructor() {
    this.currentBowl = 1;
    this.currentFrame = 1;
    this.score = 0;
    this.frames = {};
  }

  enterPins(pins) {
    this.addBonusBowl(pins);
    if (this.currentFrame < 10) {
      this._enterPinsNormalRound(pins);
    } else {
      this._enterPinsFinalRound(pins);
    }
  }

  addBonusBowl(pins) {
    const frames = Object.values(this.frames)
    for (const frame of frames) {
      if (frame.complete === false && frame.number !== this.currentFrame) {
        frame.addBonusPoints(pins)
        if(frame.complete === true) {
          this._addScoreToTotal(frame);
        }
      }
    }
  }

  _enterPinsNormalRound(pins) {
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
      this._addScoreToTotal(frame);
      this.currentFrame += 1;
      this.currentBowl = 1;
    }
  }

  _enterPinsFinalRound(pins) {
    if (this.currentBowl === 1) {
      let frame = this._addFrame(this.currentFrame);
      frame.addBowl(pins, this.currentBowl);
      this.currentBowl += 1;
    } else {
      let frame = this._getCurrentFrame();
      frame.addBowl(pins, this.currentBowl);
      if (frame.complete === true) {
        this._addScoreToTotal(frame);
      } else {
        this.currentBowl += 1;
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

  _addScoreToTotal(frame) {
    if (frame.complete === true) {
      this.score += frame.score;
    }
  }
}