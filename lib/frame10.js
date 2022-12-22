const Frame = require('./frame');

class Frame10 extends Frame {
  addRoll(roll) {
    this.validateRoll(roll);

    if (this.status === 'completed') throw 'Cannot add rolls to this frame';
    if (this.status === 'active') return super.addRoll(roll);

    if (this.rolls.length === 2 && this.rolls[1] !== 10 && this.rolls[1] + roll > 10) {
      throw 'Rolls cannot add up to more than 10';
    }

    this.rolls.push(roll);
    this.score += roll;

    this.updateStatus();
  }
  
  updateStatus() {
    if (this.rolls.length === 3) {
      this.status = 'completed';
    } else if (this.score === 10) {
      this.status = 'bonus';
    } else if (this.status !== 'bonus' && this.rolls.length === 2) {
      this.status = 'completed';
    }
  }
}

module.exports = Frame10;
