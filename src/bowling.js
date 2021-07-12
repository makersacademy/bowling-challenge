'use strict';

class Bowling {
  constructor() {
    this.rolls = [];
    this.frameScore = [];
  };

  frame(first, second = 'strike') {
    if (second === 'strike') {
      this.rolls.push({first: first});
    } else {
    this.rolls.push({first: first, second: second})
    };
  };

  tenthFrame(first, second, third = 'no strike or spare') {
    if (third === 'no strike or spare') {
      this.rolls.push({first: first, second: second});
    } else {
      this.rolls.push({first: first, second: second, third: third});
    };
  };

  scoreFrame(frame) {
    if (frame === 9 && this.rolls[frame - 1]['first'] === 10) {
      this._regularStrike(frame)
    } else if (this.rolls[frame - 1]['first'] === 10 && this.rolls[frame]['first'] === 10) {
      this._strikeThenStrike(frame)
    } else if (this.rolls[frame - 1]['first'] === 10) {
      this._regularStrike(frame)
    } else if (this.rolls[frame - 1]['first'] + this.rolls[frame - 1]['second'] === 10) {
      this._spare(frame)
    } else {
      this._regularScore(frame)
    };
  };

  scoreTenthFrame() {
    if (this.rolls[9]['first'] + this.rolls[9]['second'] >= 10) {
      this.frameScore.push(this.rolls[9]['first'] + this.rolls[9]['second'] + this.rolls[9]['third']);
    } else {
      this.frameScore.push(this.rolls[9]['first'] + this.rolls[9]['second']);
    };
  };

  overall_score() {
    this.frameScore.reduce((a, b) => a + b, 0);
  };

  _regularStrike(frame) {
    this.frameScore.push(this.rolls[frame - 1]['first'] + this.rolls[frame]['first'] + this.rolls[frame][second]);
  };

  _strikeThenStrike(frame) {
    this.frameScore.push(this.rolls[frame - 1]['first'] + this.rolls[frame]['first'] + this.rolls[frame + 1]['first']);
  };

  _spare(frame) {
    this.frameScore.push(this.rolls[frame - 1]['first'] + this.rolls[frame - 1]['second'] + this.rolls[frame]['first']);
  };

  _regularScore(frame) {
    this.frameScore.push(this.rolls[frame - 1]['first'] + this.rolls[frame - 1]['second']);
  };


};
