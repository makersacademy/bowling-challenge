const Frame = require('./frame');

class Game {
  #frames; #currentFrame;

  constructor() {
    this.#frames = [];
    this.#currentFrame = 0;
    for (let i = 0; i < 10; i++) {
      this.#frames.push(new Frame());
    }
  }

  getFrames() {
    return this.#frames;
  }

  addRoll(roll) {
    this.#frames[this.#currentFrame].addRoll(roll);
  }
}

module.exports = Game;
