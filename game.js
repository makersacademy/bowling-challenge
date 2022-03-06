const Frame = require("./frame");

class Game {
  roll(pins_knocked_down) {
    return pins_knocked_down;
  }

  createFrame(roll1, roll2){
    return new Frame(roll1,roll2);
  }
  
}

module.exports = Game;
