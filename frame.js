class Frame {
  constructor(id) {
    this.id = id;
    this.roll1 = 0;
    this.roll2 = 0;
    this.roll3 = 0;
    this.bonus = 0;
    this.score = 0;
    this.totalScore = 0;
  }

  getId() {
    return this.id;
  }
  setRoll1(roll1) {
    this.roll1 = roll1;
  }
  getRoll1() {
    return this.roll1;
  }
  setRoll2(roll2) {
    this.roll2 = roll2;
  }
  getRoll2() {
    return this.roll2;
  }  
  setRoll3(roll3) {
    this.roll3 = roll3;
  }
  getRoll3() {
    return this.roll3;
  }
  setBonus(bonus) {
    this.bonus = bonus;
  }
  getBonus() {
    return this.bonus;
  }
  calculateScore() {
    this.score = this.roll1 + this.roll2 + this.roll3 + this.bonus;
    return this.score;
  }
  setTotalScore(totalScore) {
    this.totalScore = totalScore;
  }
  getTotalScore() {
    return this.totalScore;
  }

}

module.exports = Frame;