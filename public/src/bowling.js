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
    if ((Number(score1) === 10) && (Number(score2) > 0)) {
      throw new Error('You may not bowl again in this frame');
    }
    if (this.bowl1(score1) === 'strike') {
      return 'strike'
    }
    else {
      return this.bowl2(score2)
    };
  };
};
