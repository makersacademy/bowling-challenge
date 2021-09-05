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
    let after = this.scoreCard.getFrameNumber(this.number + 1)
    
    return after ? after : null
  }

  afterNext() {
    let after = this.after()
    let afterNext = this.after() ? this.after().after() : null

    return afterNext;
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

  isBoring() {
    return this.baseScore() < 10;
  }

  isSpare() {
    return this.hasTwoRolls() && this.baseScore() == 10;
  }

  isStrike() {
    return !this.hasTwoRolls() && this.baseScore() == 10;
  }

  setNumber(num) {
    this.number = num;
  }
}
