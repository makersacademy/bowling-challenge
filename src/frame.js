class Frame {
  constructor(roll1, roll2, roll3=0){
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.roll3 = roll3
  }

  addScore() {
    return this.roll1 + this.roll2
  }

  getRoll1() {
    return this.roll1
  }

  getRoll3() {
    return this.roll3
  }

  isASpare() {
    return this.addScore() === 10 && this.getRoll1() !== 10 ? true : false
  }

  isAStrike() {
    return this.getRoll1() === 10 && this.getRoll3() === 0 ? true : false
  }

  isABonus() {
    return this.getRoll3() !== 0 ? true : false
  }

  calcBonus() {
    return this.roll1 + this.roll2 + this.roll3
  }
}
