class Game {

  constructor() {
    this.frameCount = 1;
    this.pins = 10;
    this.rollCount = 2;
  };

  newRoll(score) {
    this.pins -= score
    this.rollCount -= 1
  };

};