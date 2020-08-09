class Game {
  constructor() {
    this.score = 0;
  }

  frame(roll1, roll2) {
    return [roll1,roll2];
  }

  showScore() {
    return this.score;
  };
};
