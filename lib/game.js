const Frame = require('./frame');

class Game {
  constructor() {
    this.currentFrame = 0;
    
    this.frames = [];
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
  }

  addRoll(roll) {
    if (this.currentFrame >= 10){
      throw 'The game is complete, cannot add any more rolls';
    }

    const frame = this.frames[this.currentFrame];
    frame.addRoll(roll);

    const previousTwoFrames = this.frames.slice(
      Math.max(0, this.currentFrame - 2), this.currentFrame
    );
    previousTwoFrames.forEach(prevFrame => prevFrame.addBonus(roll));

    if (frame.status !== 'active') this.currentFrame++;
  }
}

module.exports = Game;
