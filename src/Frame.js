export class Frame {

  constructor () {
    // rolls should be private
    this.rolls = [];
    this.bonus_score = 0;
    // remove frameTotal
    this.frameTotal = 0;
  }

  // add method to frame class that returns boolean for spare
  isStrike() {
    return (this.rolls[0] == 10);
  }

  isSpare() {
    return (this.rolls[0] + this.rolls[1]== 10);
  }
  // add method to frame class that returns boolean for strike

  // changing data
  addRoll(score) {
    this.rolls.push(score);
  }
  // changing data
  // input method which usually have a parameter
  addBonusScore(bonus) {
    this.bonus_score += bonus;
  }

  // output method which returns something 
  calcFrameTotal() {
    return this.rolls.reduce((a, b) => a + b, 0) + this.bonus_score;
  }
  

  // remove this method
  setFrameTotal() {
    this.frameTotal = this.calcFrameTotal();
  }

}