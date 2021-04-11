class Bowling {
  constructor() {
    this.frameScore = []
    this.frameStatus = ""
    this.score = []
    this.prevFrame = ""
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
      this.frameStatus = 'openFrame'
      this.frameScore.push(score)
      return this.frameScore
    };
  };

  frame(score1, score2 = 0) {
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

  bonus() {
    if ((this.frameStatus != 'strike') && (this.prevFrame == 'spare')) {
      // this.score.push(10 + Number(this.frameScore[0]))
      this.score.splice(-2, 0, (10 + Number(this.frameScore[0])))
      return this.score
    };
    if ((this.frameStatus == 'strike') && (this.prevFrame == 'spare')) {
      this.score.push(20)
      return this.score
    };
    if ((this.frameStatus == 'strike') && (this.prevFrame == 'strike')) {
      this.prevFrame = '2xstrike'
    };
    if ((this.frameStatus == 'strike') && (this.prevFrame == '2xstrike')) {
      this.score.push(30)
    };
  };
};

// TESTS WRITTEN FOR BONUS METHOD. NEED TO WORK OUT HOW TO PUSH PREVIOUS
// INTO THE ARRAY
