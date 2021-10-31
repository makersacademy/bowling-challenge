const Frame = require('../src/frame')

class Game {
  constructor() {
    this.frames = [];
    this.score = 0;
  }

  roll(first_roll, second_roll){
    this._createFrame();
  }
}


module.exports = Game;
