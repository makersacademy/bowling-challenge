'use strict';

class BowlingGame {
  constructor(){
    this.currentFrame = 1;
    this.strike = false;
    this.spare = false;
    this.newScorecard = new Scorecard();
  }

  roll1(playersScore){
    if(this.strike){
      this.updateBonus(playersScore);
    } else if(this.spare){
      this.updateBonus(playersScore);
    }

    if(playersScore < 10 && this.currentFrame == 10){
      this.updateRoll1Score(playersScore);
      this.updateRoll2Score(0);
      this.updateRoll3Score(0);
      this.updateScorecard();
    } else if(playersScore == 10 && this.currentFrame < 10) {
      this.updateRoll1Score(playersScore);
      this.updateRoll2Score(0);
      this.updateScorecard();
      this.strike = true;
      return "Strike!";
    } else {
      this.updateRoll1Score(playersScore);
      return "Nice roll! Let's Roll again!";
    }
  }

  roll2(playersScore){
    this.updateRoll2Score(playersScore);

    if(this.currentFrame == 10){
      this.updateRoll2Score(playersScore)
    } else if(this.strike){
      this.updateBonus(playersScore);
      this.updateScorecard();
      this.strike = false;
    } else if(this.spare){
      this.updateScorecard();
      this.spare = false;
    } else if(this.strike == false && this.spare == false){
      this.updateRoll2Score(playersScore);
      this.updateScorecard();
    }

    if(this.newScorecard.roll1Score + playersScore == 10){
      this.spare = true;
      return "Spare!";
    }
    return "Great Job! That's the end of this frame";
  }

  roll3(playersScore){
    if(this.currentFrame < 10){
      return "You can only roll a third time in the 10th frame";
    }
    this.updateRoll3Score(playersScore);
    if(this.strike){
      this.updateScorecard();
    } else if(this.spare){
      this.updateScorecard();
    } else {
      this.updateScorecard();
    }
  }


  updateRoll1Score(playersScore){
    this.newScorecard.roll1Score = playersScore;
  }

  updateRoll2Score(playersScore){
    this.newScorecard.roll2Score = playersScore;
  }

  updateRoll3Score(playersScore){
    this.newScorecard.roll3Score = playersScore;
  }

  updateBonus(playersScore){
    this.newScorecard.updateBonus(playersScore);
  }

  updateScorecard(){
    this.newScorecard.updateScorecard(this.currentFrame, this.strike, this.spare);
    this.nextFrame();
  }

  nextFrame(){
    if(this.currentFrame < 10){
      this.currentFrame += 1
    } else {
      return this.endOfGame();
    }
  }

  view_scorecard(){
    return this.newScorecard.scorecard;
  }

  endOfGame(){
    return "End of game";
  }

};
