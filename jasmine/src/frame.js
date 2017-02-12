var Frame = class {
  constructor(rollClass) {
    this.rolls = [new rollClass, new rollClass];
    this.bonus = 0
    this.score = 0

    this._standingPins = 10;
    this._activeRollNumber = 0
  };

  setKnockedDownPins(pins) {
    if (this._standingPins >= pins) {
      this._reduceStandingPins(pins);
      this.activeRoll().knockedDownPins += pins;
      return this.activeRoll().knockedDownPins;
    } else {
      throw('Cannot set pins number: are you cheating?!?!?!');
    }
  };

  nextRoll() {
    if (this._standingPins == 0) {throw('Cannot advance to the next roll: pins have finished for this frame!');}
    this._activeRollNumber += 1;
  }

  getStandingPins() {
    return this._standingPins;
  }

  activeRoll() {
    return this.rolls[this._activeRollNumber]
  }

  // PRIVATE
  _reduceStandingPins(pins) {
    return this._standingPins -= pins;
  }

};
