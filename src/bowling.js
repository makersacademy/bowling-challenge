"use strict";

class Bowling {

  constructor() {
    this.score = 0;
    this.frame = 1;
    this.lastFrame = 10;
    this.scoreCard = [];
    this.strikeIndex = 0;
    this.previousFrameHad;
  }

  scoring(currentFrameScore){
    var strikeIndex = 0
    let currentFrameTotal = currentFrameScore.reduce((a,b) => a + b, 0);
    if(currentFrameTotal > 10) {
      return "invalid score";
    } else if (currentFrameTotal && currentFrameScore[0] === 10 ) {
        if(this.previousFrameHad != "aStrike") {
          this.previousFrameHad = "aStrike";
          this.strikeIndex = this.frame - 1;
        }
      this._scoringHelper(currentFrameScore)
      return "X";
    } else if (currentFrameTotal === 10) {
      this.previousFrameHad = "aSpare";
      this._scoringHelper(currentFrameScore);
      return "/";
    } else {
      this._scoringHelper(currentFrameScore)
      strikeIndex = this.strikeIndex
      this.calcScore(currentFrameScore, currentFrameTotal, strikeIndex);
      return this.score;
    }
  }

  currentFrame() {
    return this.frame;
  }

  nextFrame() {
    if (this.frame === this.lastFrame) {
      return;
    }
    this.frame += 1;
  }

  calcScore(currentFrameScore, currentFrameTotal,strikeIndex) {
    if(this.previousFrameHad === "aStrike") {
      this._calcScoreWithStrike(currentFrameTotal,strikeIndex)
    } else if (this.previousFrameHad === "aSpare") {
        let spare = currentFrameTotal + currentFrameScore[0] + 10;
        this.score += spare;
    } else {
        this.score += currentFrameTotal;
    }
    this.previousFrameHad = "aScore";
  }

  _scoringHelper(currentFrameScore) {
    this.nextFrame();
    this.scoreCard.push(currentFrameScore);
  }

  _calcScoreWithStrike(currentFrameTotal, strikeIndex) {
    let sCard = this.scoreCard;
    let strikeScore = 0;
    for (let i = strikeIndex; i < sCard.length ; i++) {
      if(sCard[i][0] === 10) {
        let  secndFrameTotal = sCard[i + 1].reduce((a, b) => a + b, 0);
        if (sCard[i + 1][0] === 10) {
          var thirdFrameBall1 = sCard[i + 2][0] ;
        } else {
          var thirdFrameBall1 = 0;
        }
        var otherFramesTotal = secndFrameTotal + thirdFrameBall1 ;
        var indexFrameTotal = sCard[i][0];
        strikeScore += indexFrameTotal + otherFramesTotal;
      }
    }
    this.score += strikeScore + currentFrameTotal;
  }
};
