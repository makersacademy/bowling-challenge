class Frame {
  constructor() {
    this.firstTurn;
    this.secondTurn;
  }

  roll(score) {
    this.firstTurn == undefined
      ? (this.firstTurn = score)
      : (this.secondTurn = score);
  }
}
