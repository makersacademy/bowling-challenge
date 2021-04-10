class Bowling {
  constructor() {
    this.frameScore = []
    this.frameStatus = ""
    this.score = []
  }

  bowl1(score) {
    if (score === 10)  {
      this.frameStatus = 'strike'
      return 'strike'
    }
    else {
      this.frameScore.push(score)
      return score
    };
  };

  bowl2(score) {
      if (Number(this.frameScore) + Number(score) === 10) {
        this.frameStatus = 'spare'
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
    if (this.bowl1(score1) != 'strike') {
      this.score.push(score1, score2)
      return this.bowl2(score2)
    }
    else {
      return this.bowl1(score1)
    };
  };
};
