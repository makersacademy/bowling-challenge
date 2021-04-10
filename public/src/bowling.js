class Bowling {
  constructor() {
    this.frameScore = []
  }

  bowl1(score) {
    if (score === 10)  {
      return 'strike'
    }
    else {
      this.frameScore.push(score)
      return score
    };
  };

  bowl2(score) {
      if (Number(this.frameScore) + Number(score) === 10) {
        return 'spare'
      }
    else {
      this.frameScore.push(score)
      return this.frameScore
    };
  };

  frame(score1, score2) {
    this.bowl1(score1)
    return this.bowl2(score2)
  };
};
