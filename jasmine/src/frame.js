var Frame = class {
  constructor(rollClass) {
    this._standingPins = 10;
    this.rolls = [new rollClass, new rollClass];
    this._activeRollNumber = 0
  };

  setKnockedDownPins(pins) {
    if (this._standingPins >= pins) {
      this._reduceStandingPins(pins);
      this._activeRoll().knockedDownPins += pins;
      return this._activeRoll().knockedDownPins;
    } else {
      throw('Cannot set pins this way: you might be cheating!!!');
    }
  };

  nextRoll() {
    this._activeRollNumber += 1;
  }

  getStandingPins() {
    return this._standingPins;
  }

  // PRIVATE
  _reduceStandingPins(pins) {
    return this._standingPins -= pins;
  }

  _activeRoll() {
    return this.rolls[this._activeRollNumber]
  }
};
