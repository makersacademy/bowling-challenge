function Game(){

  this.finalScore = 0;
  this.throwsLeft = 21;
  this.framesPlayed = 0;
  this.totalScore = 0;


  this.throwBall = function(score){
    if (this.throwsLeft>0){
      this.totalScore += score;
    }
    // this.updateFramesPlayed();
    this.updateThrowsLeft();

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
