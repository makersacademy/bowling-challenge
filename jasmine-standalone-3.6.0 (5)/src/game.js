
class Frame{
  constructor(firstRollScore, addTotalScore, secondRollScore){
  this.firstRollScore = firstRollScore;
  this.addTotalScore = addTotalScore
  this.secondRollScore = secondRollScore;
  const MAX_FRAMECAPTURED = 10
  this.totalScorePerFrame = 'ERROR- ABOVE 10'
  this.add = this.firstRollScore + this.secondRollScore
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
    if(this.captureFrame > this.MAX_FRAMECAPTURED){
      return this.totalScorePerFrame 
  }
  }

  captureFrame(){
    this.add()
  }

  strike(){
    return this.firstRollScore === 10;
  }

  spare(){
    return this.firstRollScore === 10;
  }
  // calculateTotalScore() {
  // // this.addTotalScore = (this.enterFirstRollScore + this.enterSecondRollScore)
  // }
}

