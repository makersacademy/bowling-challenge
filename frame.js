class Frame {
  constructor () {
    this.bonus = 0;
    this.firstRoll = 0; 
    this.secondRoll = 0; 
  }

  isAStrike = () => {
    return this.firstRoll === 10;
  }

  isASpare = () => {
    return this.firstRoll != 10 
      && this.firstRoll + this.secondRoll === 10;
  }

  getTotal = () => {
    return this.firstRoll + this.secondRoll + this.bonus;
  }
}

module.exports = Frame;

