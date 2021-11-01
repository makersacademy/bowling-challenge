/* eslint-disable class-methods-use-this */
const Frame = require('./frame');
const FinalFrame = require('./final_frame');

class Game {
  constructor() {
    this.frames = [];
  }

  roll(one, two) {
    this.rollParams(one, two);
    this.newFrame(one, two);
    if (this.frames.length > 2) {
      this.bonusScan();
    }
  }

  finalRoll(one, two) {
    const final = new FinalFrame();
    final.firstRoll(one);
    final.secondRoll(two);
    this.frames.push(final);
    this.bonusScan();
  }

  bonusRoll(final) {
    this.frames.at(-1).finalRoll(final);
    this.finalBonusScan();
  }

  fetchScore() {
    const score = [];
    this.frames.map((x) => (score.push(x.score)));
    return score.reduce((a, b) => a + b);
  }

  newFrame(one, two) {
    const frame = new Frame();
    frame.firstRoll(one);
    frame.secondRoll(two);
    this.frames.push(frame);
  }

  isStrike(frame) {
    if (frame.first_roll === 10 && frame.second_roll === 'x') {
      return true;
    }
  }

  strikeBonus() {
    if (!this.isStrike(this.frames.at(-2))) {
      this.frames.at(-3).score += this.frames.at(-2).score;
    } else {
      this.frames.at(-3).score += 10 + this.frames.at(-1).first_roll;
    }
  }

  isSpare(frame) {
    if (frame.score === 10 && frame.second_roll !== 'x') {
      return true;
    }
  }

  spareBonus() {
    this.frames.at(-3).score += this.frames.at(-2).first_roll;
  }

  bonusScan() {
    if (this.isStrike(this.frames.at(-3))) {
      this.strikeBonus();
    } else if (this.isSpare(this.frames.at(-3))) {
      this.spareBonus();
    }
  }

  finalBonusScan() {
    if (this.isStrike(this.frames.at(-2))) {
      this.strikeBonus();
    } else if (this.isSpare(this.frames.at(-2))) {
      this.spareBonus();
    }
  }

  rollParams(one, two) {
    const pins = one + two;
    if (!Number.isInteger(one)) {
      throw Error('Please enter a number!');
    } else if (pins < 0) {
      throw Error('You cannot throw a negative roll!');
    } else if (pins > 10) {
      throw Error('There are only 10 pins!');
    }
  }
}

module.exports = Game;
