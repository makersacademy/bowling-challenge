class Frame {
  constructor(scoreCard) {
    this.firstRoll = null;
    this.secondRoll = null;
    this.scoreCard = scoreCard;
  }

  addRoll(roll) {
    this.firstRoll ? this.secondRoll = roll : this.firstRoll = roll
  }
}
