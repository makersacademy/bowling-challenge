class Frame {
  #score;
  #rolls;
  #status;
  
  constructor() {
    this.#score = 0;
    this.#rolls = [];
    this.#status = 'active';
  }

  addRoll(roll) {
    if (this.#status !== 'active') throw 'Cannot add rolls to this frame';
    if (roll < 0 || roll > 10) throw 'A roll must be between 0 and 10';
    if (!Number.isInteger(roll)) throw 'A roll must be an integer';
    if (this.#score + roll > 10) throw 'Rolls cannot add up to more than 10';

    this.#score += roll;
    this.#rolls.push(roll);
    
    this.#updateStatus();
  }

  format() {
    const symbols = this.#rolls.map((roll) => roll === 0 ? '-' : roll);
    if (symbols.length === 0 ) {
      return '     ';
    } else if (symbols.length === 1 && this.#score >= 10) {
      return '    X';
    } else if (symbols.length === 1) {
      return `${symbols[0]}    `;
    } else if (symbols.length === 2 && this.#score >= 10) {
      return `${symbols[0]} , /`;
    } else if (symbols.length === 2) {
      return `${symbols[0]} , ${symbols[1]}`;
    }
  }

  getScore() {
    return this.#score;
  }

  getRolls() {
    return this.#rolls;
  }

  getStatus() {
    return this.#status;
  }

  #updateStatus() {
    if (this.#score === 10 && this.#rolls.length === 1) {
      this.#status = 'strike';
    } else if (this.#score === 10 && this.#rolls.length === 2) {
      this.#status = 'spare';
    } else if (this.#rolls.length === 2) {
      this.#status = 'completed';
    }
  }
}

module.exports = Frame;
