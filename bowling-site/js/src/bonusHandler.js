
function BonusHandler(){

  this.bonusArray=[]

  this.updateBonusPointsIfRequired = function(){
    if(this.isBonusRequired()){
      numberOfBonuses = this.bonusArray.length
      for (i = 0; i < numberOfBonuses; i++) {
        this.applyBonus(this.score);
      }
    }
    return(this.results)
  }

  this.isBonusRequired = function(){
    return this.bonusArray.length>0
  }

  this.applyBonus = function(){
    bonus = this.bonusArray.shift();
    frameNumber = bonus.frameIndex;
    throwsLeft = bonus.updatesLeft;
    this.results[frameNumber].bonus += this.score;
    bonus.updatesLeft=throwsLeft-1;
    if (bonus.updatesLeft > 0){
      this.bonusArray.push(bonus)
    }else{
      this.updateTotalScoreAfterBonus(frameNumber)
    }
  }

  this.activateBonus=function(){
    if(this.isStrikeRound){
      this.activateStrikeBonus();
    }else{
      this.activateSpareBonus();
    }
  }

  this.activateSpareBonus = function(){
    this.bonusArray.push({frameIndex:this.framesPlayed, updatesLeft: 1})
  }

  this.activateStrikeBonus = function(){
    this.bonusArray.push({frameIndex:this.framesPlayed, updatesLeft: 2})
  }

  this.updatePlayState = function(inputs){
    this.score=inputs.score;
    this.results=inputs.results;
    this.framesPlayed = inputs.framesPlayed;
    this.isStrikeRound = inputs.isStrikeRound;
    this.totalScore = inputs.totalScore;
  }

  this.updateTotalScoreAfterBonus=function(frameNumber){
    frameResults = this.results[frameNumber]
    throw1= frameResults.throw1
    throw2= frameResults.throw2
    bonus = frameResults.bonus
    total = throw1 + throw2 + bonus
    this.totalScore += total
  }

}
