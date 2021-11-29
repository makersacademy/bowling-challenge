class Bowling {
  constructor() {
    this.gameArray = [];
    this.roundArray = [];
    this.roundCounter = 1;
    this.firstBowl = null;
    this.secondBowl = null;
  }
  addFirstBowl(pins) {
    this.firstBowl = pins;
    this.roundArray.push(this.firstBowl);
  }
  addSecondBowl(pins) {
    this.secondBowl = pins;
    this.roundArray.push(this.secondBowl);
  }
}
module.exports = Bowling;
