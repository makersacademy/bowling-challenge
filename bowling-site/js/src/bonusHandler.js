//
//
// 88
// 88
// 88
// 88,dPPYba,   ,adPPYba,  8b,dPPYba,  88       88 ,adPPYba,
// 88P'    "8a a8"     "8a 88P'   `"8a 88       88 I8[    ""
// 88       d8 8b       d8 88       88 88       88  `"Y8ba,
// 88b,   ,a8" "8a,   ,a8" 88       88 "8a,   ,a88 aa    ]8I
// 8Y"Ybbd8"'   `"YbbdP"'  88       88  `"YbbdP'Y8 `"YbbdP"'
//


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
    throw3= frameResults.throw3
    bonus = frameResults.bonus
    total = throw1 + throw2 + throw3 + bonus
    this.totalScore += total
  }

}
