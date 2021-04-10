class Frame {
  constructor(rolls) {
    this.rolls = []
  }
  roll(pins) {
    this.rolls.push(pins);
  }
  isStrike() {
    if(this.rolls[0] === 10) { 
      return true 
    } else {
      return false
    };
  }
}

