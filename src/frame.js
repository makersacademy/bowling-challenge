'use strict';

class Frame{
  constructor() {
    this.rolls = [];
    this.frameScore = 0;
    this.strikeBonus = [];
    this.spareBonus = [];
  }

  storePins(num) {
    this.rolls.push(num);
  }

  calculateTotal() {
    this.frameScore = this.rolls.reduce((a, b) => a + b, 0);
    return this.frameScore
  }

  isStrike() {
    return this.rolls[0] === 10;
  }

  isSpare() {
    return this.rolls[0] + this.rolls[1] === 10 && this.rolls[0] !== 10
  }

  isComplete() {
    return this.rolls.length === 2 || this.isStrike();
  }

  showFrameRolls() {
    return this.rolls;
  }

  showStrikeBonus() {
    return this.strikeBonus;
  }

  addStrikeBonus(num) {
    this.strikeBonus.push(num);
  }

  showSpareBonus() {
    return this.strikeBonus;
  }

  addSpareBonus(num) {
    this.strikeBonus.push(num);
  }
}