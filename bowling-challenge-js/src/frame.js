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
    let afterNext = this.after() ? this.after().after() : null

    return afterNext;
  }

  baseScore() {
    let score = 0;

    if (this.firstRoll) score += this.firstRoll;
    if (this.secondRoll) score += this.secondRoll;

    return score;
  }

  before() {
    let before = this.scoreCard.getFrameNumber(this.number - 1)
    
    return before ? before : null
  }

  complete() {
    return (
      this.hasTwoRolls() ||
      this.isStrike() ||
      (this.number == 11 && this.firstRoll && this.before().isSpare())
      )
  }

  hasTwoRolls() {
    return this.secondRoll != null;
  }

  isBoring() {
    return this.baseScore() < 10;
  }

  isComplete() {
    return (this.hasTwoRolls() || this.isStrike())
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
