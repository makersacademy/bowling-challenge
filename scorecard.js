class Scorecard {
  constructor() {
    this._currentFrame = 1;
    this._rollsMadeInCurrentFrame = 0;
    this._pinsRemaining = 10;
    this._activeBonusLifetimes = [];
    this.historyLog = [];
    this.currentScore = 0;
    this.gameFinished = false;
  }
  addRoll(pinsHit) {
    // Use short-circuiting || operator to avoid comparing
    // a number with a non-numeric type
    // (=> the order of the lines in the if statement matters!)
    if (!Number.isInteger(pinsHit) || pinsHit < 0 || pinsHit > 10) {
      throw new Error(`${pinsHit} is not a valid value for pinsHit`);
    }
    this._rollsMadeInCurrentFrame += 1;
    this._pinsRemaining -= pinsHit;
    this.historyLog.push({
      frame: this._currentFrame,
      rollInFrame: this._rollsMadeInCurrentFrame,
      pinsHit: pinsHit,
    });
    // Update score, then handle bonus lifetimes
    this.currentScore += this._calculateRollScore(pinsHit);
    this._tickBonusLifetimes();
    if (this._pinsRemaining === 0) {
      // Check for strike or spare
      if (this._rollsMadeInCurrentFrame === 1) {
        // Strike!
        this._activeBonusLifetimes.push(2);
      } else if (this._rollsMadeInCurrentFrame === 2) {
        // Spare!
        this._activeBonusLifetimes.push(1);
      }
      // Go to next frame (reset pins, etc.)
      this._gotoNextFrame();
    }
    if (this._rollsMadeInCurrentFrame === 2) {
      this._gotoNextFrame();
    }
  }
  _gotoNextFrame() {
    this._currentFrame += 1;
    this._rollsMadeInCurrentFrame = 0;
    this._pinsRemaining = 10;
  }
  _calculateRollScore(pinsHit) {
    const multiplier = this._getBaseMultiplier() + this._getBonusMultiplier();
    return pinsHit * multiplier;
  }
  _getBaseMultiplier() {
    return 1;
  }
  _getBonusMultiplier() {
    return this._activeBonusLifetimes.length;
  }
  _tickBonusLifetimes() {
    this._activeBonusLifetimes = this._activeBonusLifetimes.map(
      (lifetime) => lifetime - 1
    )
  }
}

module.exports = Scorecard;
