 
 class Score {

  constructor() {
    this.firstBowlPins = null;
    this.secondBowlPins = null;
    this.strike = false;

  };

  firstBowl(pins) {
    this.firstBowlPins = pins;
  }

  secondBowl(pins) {
    this.secondBowlPins = pins;
  }

  isStrike() {
    if (this.firstBowlPins === 10) {
      this.strike = true
    }
  };
 };