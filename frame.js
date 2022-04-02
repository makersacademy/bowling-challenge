export default class Frame {
  constructor(firstRoll, secondRoll = 0) {
    this.firstRoll = firstRoll;
    this.secondRoll = secondRoll;
    this.frameTotalScore = firstRoll + secondRoll;
  }
}

