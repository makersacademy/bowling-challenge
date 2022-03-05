class Frame {
  constructor(frameCounter = 0) {
    this.rollOne = [];
    this.rollTwo = [];
    this.frameTotal = [];
    this.frameBonus = [];
    this.bonusPoints = [];
    this.frameCounter = frameCounter;
  }

  firstRoll(pinfall) {
    this.rollOne[this.frameCounter] = pinfall
    if (pinfall === 10) {
      this.strike();
    }
  }

  secondRoll(pinfall) {
    this.rollTwo[this.frameCounter] = pinfall
    if (this.rollOne[this.frameCounter] + pinfall === 10) {
      this.spare();
    } else {
      this.frameBonus[this.frameCounter] = 0
      this.endOfRound()
    }
  }

  endOfRound() {
    this.frameTotal[this.frameCounter] = this.rollOne[this.frameCounter] + this.rollTwo[this.frameCounter];
    this.checkBonus();
    this.frameCounter ++;
    this.rollOne[this.frameCounter] = 0; 
    this.rollTwo[this.frameCounter] = 0;
  }

  checkBonus() {
    if (this.frameBonus[this.frameCounter - 1] === "Spare") {
       this.spareBonus();
      } else if (
        this.frameBonus[this.frameCounter - 1] === "Strike" 
        ) {
        this.singleStrikeBonus();
      } else {
        this.bonusPoints[this.frameCounter] = 0
      }
  }

  spareBonus() {
    this.bonusPoints[this.frameCounter - 1] = this.rollOne[this.frameCounter]
    this.frameTotal[this.frameCounter -1] = this.rollOne[this.frameCounter -1] + this.rollTwo[this.frameCounter -1] + this.bonusPoints[this.frameCounter - 1];
  }

  singleStrikeBonus() {
    this.bonusPoints[this.frameCounter - 1] = this.rollOne[this.frameCounter] + this.rollTwo[this.frameCounter]
    this.frameTotal[this.frameCounter -1] = this.rollOne[this.frameCounter -1] + this.rollTwo[this.frameCounter -1] + this.bonusPoints[this.frameCounter - 1];
  }


  strike() {
    this.frameBonus[this.frameCounter] = "Strike"
    this.rollTwo[this.frameCounter] = 0;
    this.endOfRound()
  }

  spare() {
    this.frameBonus[this.frameCounter] = "Spare"
    this.endOfRound()
  }

}

module.exports = Frame
