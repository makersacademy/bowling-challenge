
class Frame {
  constructor() {
    this.rolls = [];
  }

  formatFrame() {
    if (this.strikeFrame()) {
      return 'X |  ';
    } else if (this.spareFrame()) {
      return `${this.rolls[0]} |/ `;
    } else if (this.openFrame()) {
      return `${this.rolls[0]} |${this.rolls[1]} `;
    } else {
      return `${this.rolls[0]} |  `;
    }
  }

  logRoll(pinsDowned) {
    if (this.#invalidPins(pinsDowned)) {
      throw new Error('Invalid pins downed');
    }
    this.rolls.push(pinsDowned);
  }

  sumFrame() {
    return this.rolls.reduce((sum, roll) => sum + roll, 0);
  }

  allRolls() {
    return this.rolls;
  }

  frameComplete() {
    return (this.rolls.length > 1 || this.strikeFrame() ? true : false );
  }

  strikeFrame() {
    return (this.rolls[0] == 10 ? true : false);
  }

  spareFrame() {
    return (this.rolls[0] + this.rolls[1] == 10 ? true : false);
  }

  openFrame() {
    return (!this.spareFrame() && 
        !this.strikeFrame() && 
        this.frameComplete() ? true : false);
  }

  // Private Methods
  #invalidPins(pinsDowned) {
    return (pinsDowned < 0 || pinsDowned > 10 ? true : false);
  }
}


module.exports = Frame;
