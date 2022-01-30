const Frames = require("./frames.js");

class ScoreCard {
  constructor(frames = new Frames) {
    this.rolls = [];
    this.frames = frames;
  }

  addKnockedPins(pins) {
    if (this.#tooManyPins(pins)) throw "this is a 10 pins bowling game!";

    this.rolls.push(pins);
    if (this.#frameIsSet(pins)) this.#setNewFrame();
  }

  getTotalPoints() {
    return this.frames.totalPoints();
  }

  #setNewFrame() {
    this.frames.createNewFrame(this.rolls);
    this.rolls = [];
  }

  #frameIsSet(pins) {
    return this.rolls.length === 2 ||
    pins === 10 ||
    this.frames.tenthFrame();
  }

  #tooManyPins(pins) {
    return this.rolls.reduce((partialSum, a) => partialSum + a, 0) + pins > 10;
  }
}

module.exports = ScoreCard;
