class Bowling {
  constructor() {
    this.gameArray = [];
    this.roundArray = [];
    this.roundCounter = 1;
    this.firstBowl= null;
    this.secondBowl = null;
  }
  addFirstBowl(pins) {
    this.firstBowl = pins;
    this.roundArray.push(this.firstBowl)
    if (this.firstBowl === 10) { this.finishRound(); }
  }
  addSecondBowl(pins) {
    this.secondBowl = pins;
    this.roundArray.push(this.secondBowl);
    this.finishRound();
  }
  finishRound() {
    this.gameArray.push(this.roundArray);
    this.firstBowl = null;
    this.secondBowl = null;
  }
  isStrike(round) {
    let roundIndex = round - 1;
    return this.gameArray[roundIndex][0] === 10 ? true : false;
  }
}



module.exports = Bowling;