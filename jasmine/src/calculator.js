'use strict';

function Calculator() { 
  this.total = 0
};

Calculator.prototype.totalScore = function(scorecard) {
  for (var i = 0; i < scorecard.frames.length; i++) {
    if (i < (scorecard.frames.length - 1)) {

      if (scorecard.frames[i].roll1 + scorecard.frames[i].roll2 < 10) {
        this.total += scorecard.frames[i].roll1
        this.total += scorecard.frames[i].roll2
      } else if (scorecard.frames[i].roll1 === 10) {
        this.total += 10
        var secondBonusRoll = scorecard.frames[i+1].roll2;
        if (secondBonusRoll === null) {
          secondBonusRoll = scorecard.frames[i+2].roll1
        }
        this.total += (scorecard.frames[i+1].roll1 + secondBonusRoll)} else if (scorecard.frames[i].roll1 + scorecard.frames[i].roll2 === 10) {
        this.total += 10
        this.total += scorecard.frames[i+1].roll1
      }
    } else if (i === (scorecard.frames.length - 1)) {

      if (scorecard.frames[i].roll1 + scorecard.frames[i].roll2 > 9) {
        this.total += (scorecard.frames[i].roll1 + scorecard.frames[i].roll2 + scorecard.frames[i].roll3)
      } else {
        this.total += (scorecard.frames[i].roll1 + scorecard.frames[i].roll2)
      }
    }
  }
  return this.total
};
