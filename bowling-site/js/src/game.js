function Game(){

  this.finalScore = 0;
  this.throwsLeft = 21;
  this.framesPlayed = 0;
  this.totalScore = 0;
  this.currentFrameScores=[]
  this.bonusArray=[]


  this.throwBall = function(score){
    if (this.throwsLeft>0){
      this.updateThrowsLeft();
      this.currentFrameScores.push(score);
      this.totalScore += score;
    }
    // this.updateFramesPlayed();

    console.log("Ball Thrown, throwsLeft:" + this.throwsLeft);
    console.log("Frames Played:" + this.framesPlayed);
  }

  this.updateThrowsLeft = function(){
    if (this.throwsLeft > 2){
      this.throwsLeft -= 1;
    }else if (this.throwsLeft == 2){
      this.throwsLeft -= 2;
    }
  }


  this.isBonus = function(){
    throw1 = this.currentFrameScores[0]
    throw2 = this.currentFrameScores[1]
    return (throw1+throw2==10)
  }


  this.activateSpareBonus = function(){
    throwIndex = Math.modulus(this.throwsLeft - 21);
    bonusArray[throwIndex+1]=throwIndex;
  }

  this.isFrameOver=function(){
    return (this.throwsLeft<21 && this.throwsLeft%2 ==1)
  }

  this.throwsDone =function(){
    Math.modulus(this.throwsLeft-21)
  }
  // this.updateFramesPlayed = function(){
  //    if ((this.throwsLeft<21 && this.throwsLeft%2 == 1)||this.throwsLeft ==0) {
  //     this.framesPlayed+=1;
  //   }
  // }

  this.finishGame = function(){
    if(this.throwsLeft==0){
      this.finalScore = this.totalScore
    }
  }


}
