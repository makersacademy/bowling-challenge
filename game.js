const Frame = require("./frame");

class Game {
  constructor(){
    this.frames = [];
    this.rolls = [];
  }
  roll(pins_knocked_down) {
    this.rolls.push(pins_knocked_down);
    if(this.rolls.length == 2){
      this.createFrame(this.rolls[0],this.rolls[1]);
      this.rolls = [];
    }
    return pins_knocked_down;
  }

  score(){
    let total = 0
    this.frames.forEach(frame => {
      total += frame.score();
    })
    return total;
  }

  createFrame(roll1, roll2){
    let newFrame = new Frame(roll1,roll2);
    this.frames.push(newFrame);
    return newFrame;
  }

}

module.exports = Game;
