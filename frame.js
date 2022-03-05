class Frame {
  constructor(frameCounter = 0) {
    this.rollOne = [];
    this.rollTwo = [];
    this.frameTotal = [];
    this.frameCounter = frameCounter
  }

  firstRoll(pinfall) {
    this.rollOne[this.frameCounter] = pinfall
  }

  secondRoll(pinfall) {
    this.rollTwo[this.frameCounter] = pinfall
    this.endOfRound()
  }

  endOfRound() {
    this.frameTotal[this.frameCounter] = this.rollOne[this.frameCounter] + this.rollTwo[this.frameCounter];
    this.frameCounter ++;
    this.rollOne[this.frameCounter] = 0; 
    this.rollTwo[this.frameCounter] = 0;
  }
}


module.exports = Frame
