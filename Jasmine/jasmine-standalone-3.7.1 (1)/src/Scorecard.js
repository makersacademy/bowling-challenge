class Scorecard {

  constructor(){
    this.scorecard = [];
    this.roll1Score = 0;
    this.roll2Score = 0;
    this.roll3Score = null;
    this.bonusScore = 0;
    this.totalGameScore = 0;
  }

  updateBonus(playersScore){
    this.bonusScore += playersScore;
  }

  updateScorecard(currentFrame, strike, spare){
    this.runningTotal(currentFrame);

    if(currentFrame == 10 && spare){
      this.scorecard[currentFrame - 2][`frame${currentFrame-1}`]["bonus"] = this.roll1Score;
    } else if(currentFrame == 10 && strike){
      this.scorecard[currentFrame - 2][`frame${currentFrame-1}`]["bonus"] = this.roll1Score + this.roll2Score;
    } else if(spare || strike){
      this.scorecard[currentFrame - 2][`frame${currentFrame-1}`]["bonus"] = this.bonusScore;
      this.scorecard[currentFrame - 2][`frame${currentFrame-1}`]["total"] += this.bonusScore;
    }

    this.totalGameScore+=this.bonusScore;
    this.bonusScore = 0;

    let frameNum = `frame${currentFrame}`;
    this.scorecard.push({ [frameNum]: { roll1: this.roll1Score, roll2: this.roll2Score, roll3: this.roll3Score, bonus: this.bonusScore, total: this.totalGameScore }});
  }

  runningTotal(currentFrame){
    if(currentFrame < 10){
      this.totalGameScore += this.roll1Score + this.roll2Score;
    } else {
      this.totalGameScore+=this.roll1Score + this.roll2Score + this.roll3Score;
    }
  }
};
