class Frame {
  constructor(firstBowl) {
    this.bowls = [firstBowl];
  }

  addBowl(secondBowl) {
    this.bowls.push(secondBowl);
  }

  frameScore() {
    return this.bowls.reduce((a, b) => a + b, 0);
  }

}