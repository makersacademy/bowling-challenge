class Frame {
  constructor() {
    this.score = [];
  }

  roll = pins => {
    this.score.push(pins);
  }

  showScore = () => {
    return this.score;
  }
}