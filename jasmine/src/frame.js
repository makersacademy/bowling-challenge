var Frame = class {
  constructor(id, rollClass) {
    this.id = id;
    this.rolls = new Array();
    this.maxRolls = 2;
    this.bonus = 0
    this.score = 0

    this._standingPins = 10;
    this._activeRollNumber = -1;
    this._rollClass = rollClass;

    // this.createRoll();
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
    this.createRoll();
    return this.activeRoll();
  }

  getStandingPins() {
    return this._standingPins;
  }

  activeRoll() {
    return this.rolls[this._activeRollNumber]
  }

  createRoll() {
    if (this.rolls.length >= this.maxRolls) {throw('Cannot create roll: max number reached')};
    roll = new this._rollClass(this._activeRollNumber);
    this.rolls.push(roll);
    return roll;
  };

  // PRIVATE
  _reduceStandingPins(pins) {
    return this._standingPins -= pins;
  }

};
