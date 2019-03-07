class Game {

  constructor() {
    this.frameNumber = 0
    this.frameList = []
  }

  addFrame(frame = new Frame(this.frameNumber)) {
    if (this.frameNumber < 10) {
    this.frameList.push(frame)
    this.frameNumber += 1
    }
  }

  totalScore()  {
    var totalScore = 0;
    var arrayLength = this.frameList.length;
    for (var i = 0; i < arrayLength; i++) {
      if (i > 0) {
        totalScore += this._scoreNonFirstFrame(i)
      }
      else {
        totalScore += this._scoreFirstFrame(i)
      }
      if (i>1) {
        totalScore += this._addScoreFromThirdFrame(i)
      }
    }
    return totalScore
  }

  _scoreNonFirstFrame(i) {
    if(this._strikeBefore(i)) {
      return this._strikeDoubleScore(i)
    }
    else if(this._halfStrikeBefore(i)) {
      return this._halfStrikeDoubleScore(i)
    }
    else {
      return this._noStrikeScore(i)
    }
  }

  _scoreFirstFrame(i) {
    return this.frameList[i].scoreroll1 + this.frameList[i].scoreroll2;
  }

  _addScoreFromThirdFrame(i) {
    if(this._twoStrikesInRow(i))  {
      return this.frameList[i].scoreroll1
    } else {
      return 0
    }
  }

  _twoStrikesInRow(i) {
    return this.frameList[i-1].scoreroll1 == 10 && this.frameList[i-2].scoreroll1 == 10
  }

  _strikeBefore(i) {
    return this.frameList[i-1].scoreroll1 == 10
  }

  _halfStrikeBefore(i) {
    return this.frameList[i-1].scoreroll1 + this.frameList[i-1].scoreroll2== 10
  }

  _strikeDoubleScore(i) {
    return 2*this.frameList[i].scoreroll1 + 2*this.frameList[i].scoreroll2 + this.frameList[i].scoreroll3;
  }

  _halfStrikeDoubleScore(i) {
    return 2*this.frameList[i].scoreroll1 + this.frameList[i].scoreroll2 + this.frameList[i].scoreroll3;
  }

  _noStrikeScore(i) {
    return this.frameList[i].scoreroll1 + this.frameList[i].scoreroll2 +  this.frameList[i].scoreroll3;
  }
}
