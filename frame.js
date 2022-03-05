class Frame {
  constructor(frameCounter = 0) {
    this.rollOne = [];
    this.rollTwo = [];
    this.frameTotal = [];
    this.frameBonus = [];
    this.frameCounter = frameCounter
  }

  firstRoll(pinfall) {
    this.rollOne[this.frameCounter] = pinfall
    if (pinfall === 10) {
      this.strike();
    }
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

  strike() {
    this.frameBonus[this.frameCounter] = "Strike"
    this.rollTwo[this.frameCounter] = 0;
    this.endOfRound()
  }

}



module.exports = Frame
