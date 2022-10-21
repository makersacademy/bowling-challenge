class Scorecard {
  constructor() {
    this.scoreArr = [];
    this.frameNumber = 0;
  }

  sumScore(frameSum) {
    this.scoreArr.push(frameSum)
  }

  scoreArray() {
    return this.scoreArr;
  }


}

module.exports = Scorecard;