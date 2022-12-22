const Frame = require('./frame');

class Frame10 extends Frame {
  addRoll(roll) {
    this.validateRoll(roll);

    if (this.status === 'completed') throw 'Cannot add rolls to this frame';
    if (this.status === 'active') return super.addRoll(roll);

    if (this.numRolls === 2 && this.rolls[1] !== 10 && this.rolls[1] + roll > 10) {
      throw 'Rolls cannot add up to more than 10';
    }

    this.rolls.push(roll);
    this.score += roll;

    this.updateStatus();
  }

  format() {
    if (this.numRolls < 3 && this.status !== 'bonus') return super.format();
    
    const symbols = this.#generateSymbols();
    
    const outputFunctions = {
      1: () => `${symbols[0]}    `,
      2: () => `${symbols[0]},${symbols[1]}  `,
      3: () => {
        if (this.rolls[1] !== 10 && this.rolls[1] + this.rolls[2] === 10) {
          return `${symbols[0]},${symbols[1]},/`;
        } else {
          return `${symbols[0]},${symbols[1]},${symbols[2]}`
        }
      }
    }

    return outputFunctions[this.numRolls]();
  }
  
  updateStatus() {
    if (this.numRolls === 3) {
      this.status = 'completed';
    } else if (this.score === 10) {
      this.status = 'bonus';
    } else if (this.status !== 'bonus' && this.numRolls === 2) {
      this.status = 'completed';
    }
  }

  #generateSymbols() {
    return this.rolls.map((roll) => {
      switch (roll) {
        case 0:
          return '-';
        case 10:
          return 'X';
        default:
          return roll;
      }
    });
  }
}

module.exports = Frame10;
