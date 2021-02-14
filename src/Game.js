'use strict';

class Game {
  constructor() {
    this._frames = [];
    this._score = 0;
  }

  input_bowl(pins) {
    if(this.isOver()) {
      return console.log("Game over!");

    } else {
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
    return this._score;
  }

  isOver() {
    return this._frames.length === 10 && !this._frames[this._frames.length - 1].open
  }

  get frames() {
    return this._frames;
  }

  set current(frame) {
    this._frames.push(frame);
  }

  get score() {
    return this._score;
  }

  // set reset(zero) {
  //   this._score = zero
  // }
}
