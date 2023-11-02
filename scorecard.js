const NUMBER_OF_FRAMES = 10;
const NUMBER_OF_PINS = 10;

class Scorecard {
  constructor() {
    this._currentFrame = 1;
    this._rollsMadeInCurrentFrame = 0;
    this._pinsRemaining = NUMBER_OF_PINS;
    this._activeBonusLifetimes = [];
    this.historyLog = [];
    this.currentScore = 0;
    this.gameFinished = false;
    this._finalFrameBonusRolls = {
      active: false,
      remaining: 0,
    };
  }
  addRoll(pinsHit) {
    if (this.gameFinished) {
      throw new Error("Cannot add another roll as the game has finished");
    }
    // Use short-circuiting || operator to avoid comparing
    // a number with a non-numeric type
    // (=> the order of the lines in the if statement matters!)
    if (
      !Number.isInteger(pinsHit) ||
      pinsHit < 0 ||
      pinsHit > NUMBER_OF_PINS
    ) {
      throw new Error(`${pinsHit} is not a valid value for pinsHit`);
    }
    if (pinsHit > this._pinsRemaining) {
      throw new Error(
        `Cannot hit ${pinsHit} pin(s) ` +
        `as only ${this._pinsRemaining} pin(s) remain`
      );
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
    // Handle final frame bonus rolls; if active, return after this
    if (this._finalFrameBonusRolls.active) {
      this._finalFrameBonusRolls.remaining -= 1;
      if (this._finalFrameBonusRolls.remaining === 0) {
        this._finishGame();
      } else {
        this._resetPins();
      }
      return;
    }
    if (this._pinsRemaining === 0) {
      // Check for strike or spare
      if (this._rollsMadeInCurrentFrame === 1) {
        // Strike!
        this._activeBonusLifetimes.push(2);
        if (this._currentFrame === NUMBER_OF_FRAMES) {
          this._grantFinalFrameBonusRolls(2);
          this._resetPins();
        } else {
          this._gotoNextFrame();
        }
      } else if (this._rollsMadeInCurrentFrame === 2) {
        // Spare!
        this._activeBonusLifetimes.push(1);
        if (this._currentFrame === NUMBER_OF_FRAMES) {
          this._grantFinalFrameBonusRolls(1);
          this._resetPins();
        } else {
          this._gotoNextFrame();
        }
      }
    } else if (this._rollsMadeInCurrentFrame === 2) {
      if (this._currentFrame !== NUMBER_OF_FRAMES) {
        this._gotoNextFrame();
      } else {
        this._finishGame();
      }
    }
  }
  _grantFinalFrameBonusRolls(bonusRollCount) {
    this._finalFrameBonusRolls.active = true;
    this._finalFrameBonusRolls.remaining = bonusRollCount;
  }
  _finishGame() {
    this.gameFinished = true;
  }
  _resetPins() {
    this._pinsRemaining = NUMBER_OF_PINS;
  }
  _gotoNextFrame() {
    this._currentFrame += 1;
    this._rollsMadeInCurrentFrame = 0;
    this._resetPins();
  }
  _calculateRollScore(pinsHit) {
    return pinsHit * (this._getBaseMultiplier() + this._getBonusMultiplier());
  }
  _getBaseMultiplier() {
    if (!this._finalFrameBonusRolls.active) {
      return 1;
    } else {
      return 0;
    }
  }
  _getBonusMultiplier() {
    return this._activeBonusLifetimes.length;
  }
  _tickBonusLifetimes() {
    this._activeBonusLifetimes = this._activeBonusLifetimes
      .map((lifetime) => lifetime - 1)
      .filter((lifetime) => lifetime > 0);
  }
}

module.exports = Scorecard;
