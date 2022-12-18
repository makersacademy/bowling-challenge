const Frame = require('./frame');

class Game {
  #frames; #currentFrame;

  constructor() {
    this.#frames = [];
    this.#currentFrame = 1;
    for (let i = 0; i < 10; i++) {
      this.#frames.push(new Frame());
    }
  }

  getFrames() {
    return this.#frames;
  }

  addRoll(roll) {
    if (this.#currentFrame > 10){
      throw 'The game is complete, cannot add any more rolls';
    }

    const frame = this.#frames[this.#currentFrame - 1];
    frame.addRoll(roll);
    if (frame.getStatus() !== 'active') this.#currentFrame++;
  }
}

module.exports = Game;
