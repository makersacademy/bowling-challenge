class Frame{
  constructor(firstRollScore, addTotalScore, secondRollScore){
  this.firstRollScore = firstRollScore;
  this.addTotalScore = addTotalScore
  this.secondRollScore = secondRollScore;
  this.totalScorePerFrame = 'ERROR- ABOVE 10'
  this.captureFrame = this.firstRollScore + this.secondRollScore
  this.scoreCard = function(){
    return ++this.addTotalScore;
  };
  }


  enterFirstRollScore(pinsDown, scorecard){
   this.firstRollScore = pinsDown
  // this.calculatorTotalScore;
  };

  enterSecondRollScore(pinsDown, scorecard){
    this.secondRollScore = pinsDown;
  };

  displays(){
    this.totalScorePerFrame 
  }

  // calculatorTotalScore() {
  // this.addTotalScore = (this.firstRollScore + this.secondRollScore)
  // }
}

