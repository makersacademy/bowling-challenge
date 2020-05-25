"use strict";

class Bowling {

  constructor() {
    this.score = 0;
    this.frame = 1;
    this.lastFrame = 10;
    this.scoreCard = [];
    this.previousFrameHad;
  }

  scoring(currentFrameScore){
    let currentFrameTotal = currentFrameScore.reduce((a,b) => a + b, 0);
    if(currentFrameTotal > 10) {
      return "invalid score";
    } else if (currentFrameTotal && currentFrameScore[0] === 10 ) {
      this.previousFrameHad = "aStrike"
      this._scoringHelper(currentFrameScore)
      return "X";
    } else {
      this._scoringHelper(currentFrameScore)
      this.calcScore(currentFrameScore, currentFrameTotal)
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

  calcScore(currentFrameScore, currentFrameTotal) {
    if(this.previousFrameHad === "aStrike") {
      this._calcScoreWithStrike(currentFrameTotal)
    } else {
      this.score += currentFrameTotal
      this.previousFrameHad === "normal"
    }
  }

  _scoringHelper(currentFrameScore) {
    this.nextFrame();
    this.scoreCard.push(currentFrameScore);
  }

  _calcScoreWithStrike(currentFrameTotal) {
    let game = this.scoreCard;
    let strikeScore = 0;
    game.forEach(function(item, index) {
      if(game[index][0] === 10) {
        let  secndFrameTotal = game[index + 1].reduce((a, b) => a + b, 0);
        if (game[index + 1][0] === 10) {
          var thirdFrameBall1 = game[index + 2][0] ;
        } else {
          var thirdFrameBall1 = 0
        }
        var otherFramesTotal = secndFrameTotal + thirdFrameBall1 ;
        var indexFrameTotal = game[index][0]
        strikeScore += indexFrameTotal + otherFramesTotal;
      }
    });
      this.score += strikeScore + currentFrameTotal;
  }

};
