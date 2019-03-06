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
        totalScore += this.scoreNonFirstFrame(i)
      }
      else {
        totalScore += this.scoreFirstFrame(i)
      }
      if (i>1) {
        totalScore += this.addScoreFromThirdFrame(i)
      }
    }
    return totalScore
  }

  scoreNonFirstFrame(i) {
    if(this.frameList[i-1].scoreroll1() == 10) {
      return 2*this.frameList[i].scoreroll1() + 2*this.frameList[i].scoreroll2() + this.frameList[i].scoreroll3();
    }
    else if(this.frameList[i-1].scoreroll1() + this.frameList[i-1].scoreroll2()== 10) {
      return 2*this.frameList[i].scoreroll1() + this.frameList[i].scoreroll2() + this.frameList[i].scoreroll3();
    }
    else {
      return this.frameList[i].scoreroll1() + this.frameList[i].scoreroll2() +  this.frameList[i].scoreroll3();
    }
  }

  scoreFirstFrame(i) {
    return this.frameList[i].scoreroll1() + this.frameList[i].scoreroll2();
  }

  addScoreFromThirdFrame(i) {
    if(this.twoStrikesInRow(i))  {
      return this.frameList[i].scoreroll1()
    } else {
      return 0
    }
  }

  twoStrikesInRow(i) {
    return this.frameList[i-1].scoreroll1() == 10 && this.frameList[i-2].scoreroll1() == 10
  }
}
