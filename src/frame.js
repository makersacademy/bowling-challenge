class Frame {
  constructor(scoreCard) {
    this.firstRoll = null;
    this.secondRoll = null;
    this.number;
    this.scoreCard = scoreCard;
    this.scoreCard.addFrame(this);
  }

  addRoll(roll) {
    this.firstRoll ? this.secondRoll = roll : this.firstRoll = roll
  }

  after() {
    return this.scoreCard.getFrameNumber(this.number + 1);
  }

  setNumber(num) {
    this.number = num;
  }
}
