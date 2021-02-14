'use strict';

class Game {
  constructor() {
    this._frames = [];
    this._score = 0;
    this._bonuses = [];
  }

  input_bowl(pins) {
    if(this.isOver()) {
      return console.log("Game over!");
    } else {
      if(this.isBonus()) this.bonus(pins);
      if(this.addFrame()) this.current = new Frame(this._frames.length + 1, pins);
      this._frames[this._frames.length - 1].add_roll(pins);
      this.calculateScore();
      return pins };
  }

  addFrame() {
    return this._frames.length === 0 || (this._frames.length !== 0 && !this._frames[this._frames.length - 1].open);
  }

  calculateScore() {
    this._score = 0;
    this._frames.forEach(x => this._score += x.rolls.reduce((a,b)=>a+b));
    this._bonuses.forEach(x => this._score += x.extra)
    return this._score;
  }

  isBonus() {
    return this._frames.length !== 0 && (this._frames[this._frames.length - 1].bonus === 1 || this._frames[this._frames.length - 1].bonus === 2)
  }

  bonus(pins) {
    this.extra = new Bonus(this._frames[this._frames.length - 1].bonus);
    for (var i = 0; i < this._bonuses.length; i++)
      {var bonus = this.bonuses[i];
        if (bonus.status > 0)
        { bonus.perRoll(pins) }
    }
  }

  isOver() {
    return this._frames.length === 10 && !this._frames[this._frames.length - 1].open
  }

  get frames() {
    return this._frames;
  }

  get bonuses() {
    return this._bonuses;
  }

  set current(frame) {
    this._frames.push(frame);
  }

  set extra(bonus) {
    this._bonuses.push(bonus);
  }

  get score() {
    return this._score;
  }

  // set reset(zero) {
  //   this._score = zero
  // }
}
