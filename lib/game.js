const Frame = require('./frame');

class Game {

  constructor() {
    this.frames = [];
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
    this.framecount = 0;
  }

}  

module.exports = Game;