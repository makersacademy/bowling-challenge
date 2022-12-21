class Frame {
  
  constructor() {
    this.score = 0;
    this.rolls = [];
    this.status = 'active';
    this.bonusesLeft = 0;
  }

  addRoll(roll) {
    this.#validateRoll(roll);
    if (this.status !== 'active') throw 'Cannot add rolls to this frame';
    if (this.score + roll > 10) throw 'Rolls cannot add up to more than 10';

    this.score += roll;
    this.rolls.push(roll);
    
    this.#updateStatus();
  }

  addBonus(roll) {
    this.#validateRoll(roll);
    if (this.bonusesLeft > 0) {
      this.score += roll;
      this.bonusesLeft--;
      if (this.bonusesLeft === 0) this.status = 'completed';
    }
  }
  
  format() {
    const symbols = this.rolls.map((roll) => roll === 0 ? '-' : roll);
    if (symbols.length === 0 ) {
      return '     ';
    } else if (symbols.length === 1 && this.score >= 10) {
      return '    X';
    } else if (symbols.length === 1) {
      return `${symbols[0]}    `;
    } else if (symbols.length === 2 && this.score >= 10) {
      return `${symbols[0]} , /`;
    } else if (symbols.length === 2) {
      return `${symbols[0]} , ${symbols[1]}`;
    }
  }

  #updateStatus() {
    if (this.score === 10 && this.rolls.length === 1) {
      this.status = 'strike';
      this.bonusesLeft = 2;
    } else if (this.score === 10 && this.rolls.length === 2) {
      this.status = 'spare';
      this.bonusesLeft = 1;
    } else if (this.rolls.length === 2) {
      this.status = 'completed';
    }
  }

  #validateRoll(roll) {
    if (roll < 0 || roll > 10) throw 'A roll must be between 0 and 10';
    if (!Number.isInteger(roll)) throw 'A roll must be an integer';
  }
}

module.exports = Frame;
