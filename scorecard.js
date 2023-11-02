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
  }
}

module.exports = Scorecard;
