var Frame = require('../docs/frame');

class Game {

  constructor(){
  this.frames = [];
  }

  getFrames() {
    return this.frames;
  }

  // creates a frame with the rolls enteres and pushes into the frames array.
  enterFrame(roll1, roll2){
    var frame = new Frame(roll1, roll2);
    this.frames.push(frame.getRolls());
  }

}

module.exports = Game;