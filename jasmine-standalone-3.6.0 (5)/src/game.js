class Frame{
  constructor(firstRollScore, calculatorTotalScore, secondRollScore){
  this.firstRollScore = firstRollScore;
  this.calculatorTotalScore = calculatorTotalScore
  this.secondRollScore = secondRollScore;
  this.scoreCard = function(){
    return ++this.calculatorTotalScore;
  };
  }


  enterFirstRollScore(pinsDown, scorecard){
   this.firstRollScore = pinsDown
  // this.calculatorTotalScore;
  };

  enterSecondRollScore(pinsDown, scorecard){
    this.secondRollScore = pinsDown;
  };

  // calculatorTotalScore(){
  //   this.firstRollScore = pinsDown;
  // }
}

