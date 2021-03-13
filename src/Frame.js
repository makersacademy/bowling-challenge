const sum = (x, y) => x + y;

class Frame {
  constructor() {
    this.MAX_PINS = 10;
    this.rolls = [];
    this.pins = this.MAX_PINS
  }

  addPin(pins) {
    this.rolls.push(pins)
  }

  isStrike() {
    return this.rolls[0] === this.MAX_PINS;
  }

  isSpare() {
    if ((this.rolls[0] != this.MAX_PINS) && (this.rolls.reduce(sum) === this.MAX_PINS)) {
      return true
    } else { 
      return false 
    };
  };

  scoring() {
    return this.rolls.reduce(sum)
  }

  
}

