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

  afterNext() {
    return this.after().after();
  }

  baseScore() {
    let score = 0;

    if (this.firstRoll) score += this.firstRoll;
    if (this.secondRoll) score += this.secondRoll;

    return score;
  }

  hasTwoRolls() {
    return this.secondRoll != null;
  }

  isBonusFrame() {
    return this.number > 10;
  }

  setNumber(num) {
    this.number = num;
  }
}
