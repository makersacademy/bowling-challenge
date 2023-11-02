class Scorecard {
  constructor() {
    this._currentFrame = 1;
    this._rollsMadeInCurrentFrame = 0;
    this._pinsRemaining = 10;
    this._activeBonusLifetimes = [];
    this.historyLog = [];
    this.currentScore = 0;
  }
  addRoll(pinsHit) {
    if (
      !Number.isInteger(pinsHit) || // Use short-circuiting || operator
      pinsHit < 0 ||
      pinsHit > 10
    ) {
      throw new Error(`${pinsHit} is not a valid value for pinsHit`);
    }
    this._rollsMadeInCurrentFrame += 1;
    this._pinsRemaining -= pinsHit;
    this.historyLog.push({
      frame: this._currentFrame,
      rollInFrame: this._rollsMadeInCurrentFrame,
      pinsHit: pinsHit,
    });
    this.currentScore += pinsHit;
    if (this._pinsRemaining === 0) {
      // Check for strike
      if (this._rollsMadeInCurrentFrame === 1) {
        this._activeBonusLifetimes.push(2);
      }
      // Go to next frame (reset pins, etc.)
      this._gotoNextFrame();
    }
  }
  _gotoNextFrame() {
    this._currentFrame += 1;
    this._rollsMadeInCurrentFrame = 0;
    this._pinsRemaining = 10;
  }
}

module.exports = Scorecard;
