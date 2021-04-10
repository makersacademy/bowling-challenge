class Bowling {
  constructor() {
    this.frame = []
  }

  bowl1(score) {
    if (score === 10)  {
      return 'strike';
    }
    else {
      this.frame.push(score)
      return score;
    }
  }

  bowl2(score) {
      return [3, score];
  }
}
