const Frame = require('./frame');
const Frame10 = require('./frame10');

class Game {
  constructor() {
    this.currentFrame = 0;
    
    this.frames = [];
    for (let i = 0; i < 9; i++) {
      this.frames.push(new Frame());
    }
    this.frames.push(new Frame10());
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

    if (!['active', 'bonus'].includes(frame.status)) this.currentFrame++;
  }
}

module.exports = Game;
