class Frame {

  constructor(number) {
    this.number = number;
    this.rolls = [];
  }

  addRoll(roll) {
    if(this.rolls.length >= 2) {
      throw "Invalid roll for this frame"
    } else if(this.totalPins() >= 10) {
      throw "Invalid roll for this frame"
    }else if(this.countRolls() === 1 && this.rolls[0].pins + roll.pins > 10) {
      throw "Invalid roll for this frame"
    }
    this.rolls.push(roll)
  };

  isComplete() {
    if(this.rolls.length < 2 && this.totalPins() < 10) {
      return false;
    }
    return true;
  };

  countRolls() {
    return this.rolls.length;
  }

  totalPins() {
    return this.rolls.reduce((sum, roll) => sum + roll.pins, 0)
  };
};
