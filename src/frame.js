class Frame {

  constructor(number) {
    this.number = number;
    this.rolls = [];
  }

  addRoll(roll) {
    if(this.rolls.length >= 2) {
      throw "Invalid roll for this frame"
    } else if(this.rolls.reduce((sum, roll) => sum + roll.pins, 0) >= 10) {
      throw "Invalid roll for this frame"
    }else if(this.rolls.length === 1 && this.rolls[0].pins + roll.pins > 10) {
      throw "Invalid roll for this frame"
    }
    this.rolls.push(roll)
  }
}