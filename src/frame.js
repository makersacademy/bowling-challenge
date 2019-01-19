class Frame {
  constructor(roll1, roll2){
    this.roll1 = roll1;
    this.roll2 = roll2;
  }

  addScore() {
    return this.roll1 + this.roll2
  }

  getRoll1() {
    return this.roll1
  }

  isASpare() {
    return this.addScore() === 10 ? true : false
  }
}
