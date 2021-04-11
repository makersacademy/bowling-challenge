class Bowling {
  constructor() {
    this.frameScore = []
    this.frameStatus = ""
    this.score = []
    this.prevFrame = ""
    this.frameCounter = 0
  }

  frame(score1, score2 = 0) {
    this.frameScore = []
    if ((Number(score1) === 10) && (Number(score2) > 0)) {
      throw new Error('You may not bowl again in this frame');
    }
    if ((this._bowl1(score1) != 'strike') && (this._bowl2(score2) != 'spare')) {
      this.score.push(score1, score2)
      // return this._bowl2(score2)
    }
    if (this._bowl2(score2) == 'spare') {
      this._bowl2(score2)
    }
    else {
      this._bowl1(score1)
    };
    this.frameCounter++
    return this.bonus()
  };

  bonus() {
    // prevFrame = spare
    if ((this.frameStatus != 'strike') && (this.prevFrame == 'spare')) {
      this.score.splice(-2, 0, (10 + Number(this.frameScore[0])))
      this.score
    };
    if ((this.frameStatus == 'strike') && (this.prevFrame == 'spare')) {
      this.score.push(20)
      this.score
    };
    // prevframe = strike
    if ((this.frameStatus == 'spare') && (this.prevFrame == 'strike')) {
      this.score.push(20)
    };
    if ((this.frameStatus == 'strike') && (this.prevFrame == 'strike')) {
      return this.prevFrame = '2xstrike'
    };
    //prevFrame = 2xstrike
    if ((this.frameStatus == 'strike') && (this.prevFrame == '2xstrike')) {
      this.score.push(30)
    };
    if ((this.frameStatus == 'spare') && (this.prevFrame == '2xstrike')) {
      this.score.push(20 + Number(this.frameScore[0]))
      this.score.push(20)
    }
    if ((this.frameStatus == 'openFrame') && (this.prevFrame == '2xstrike')) {
      this.score.splice(-3, 0, (20 + Number(this.frameScore[0])))
      this.score.splice(-2, 0, (10 + Number(this.frameScore[0]) + Number(this.frameScore[1])))
    };
    this.prevFrame = this.frameStatus
  };

  frameTen(score1, score2 = 0) {
    if (score1 != 10) {
      this.frameScore.push(score1, score2)
    // this.frameScore.push(score)
    }
  }
// start of frameTen method. Currently pushes scores into frameScore
// if the first ball isn't a strike

  _bowl1(score) {
    if (score === 10)  {
      this.frameStatus = 'strike'
      return 'strike'
    }
    else {
      this.frameScore.push(score)
      return score
    };
  };

  _bowl2(score) {
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
};
