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
};
