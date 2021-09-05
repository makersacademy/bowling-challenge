export class Frame {

  constructor () {
    this.rolls = []
    this.bonus_score = 0
    this.frameTotal = 0
  }

  addRoll(score) {
    this.rolls.push(score);
  }

  addBonusScore(bonus) {
    this.bonus_score += bonus
  }

  calcFrameTotal() {
    return this.rolls.reduce((a, b) => a + b, 0) + this.bonus_score;
  }

  setFrameTotal() {
    this.frameTotal = this.calcFrameTotal();
  }

}