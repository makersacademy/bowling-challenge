const Frame = require('./frame');

class Game {

  constructor() {
    this.frames = [];
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
    this.framecount = 0;
  }

  roll(pins) {
    let currentFrame = this.frames[this.framecount];
    if (this.framecount < 9) {
      currentFrame.addRoll(pins);
      if (currentFrame.frameComplete()) {
        this.framecount += 1;
      }
    }  
  }

}  

module.exports = Game;