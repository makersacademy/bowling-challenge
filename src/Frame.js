class Frame {

  constructor () {
    this.rolls = []
    this.bonus_score = 0
  }

  addRoll(score) {
    this.rolls.push(score);
  }

  addBonusScore(bonus) {
    this.bonus_score += bonus
  }

  calcFrameTotal() {
    this.roll.reduce((a, b) => a + b, 0) + this.bonus_score;
  }




}