            //.======.
            //| INRI |
            //|      |
  //          |      |
  // .========'      '========.
  // |   _      xxxx      _   |
  // |  /_;-.__ / _\  _.-;_\  |
  // |     `-._`'`_/'`.-'     |
  // '========.`\   /`========'
  //          | |  / |
  //          |/-.(  |
            //|\_._\ |
            //| \ \`;|
            //|  > |/|
            //| / // |
            //| |//  |
            //| \(\  |  BEWARE THE GOD CLASS
            //|  ``  |
            //|      |
            //|      |
            //|      |
            //|      |
//\\jgs _  _\\| \//  |//_   _ \// _
// ^ `^`^ ^`` `^ ^` ``^^`  `^^` `^ `^

function Game(){


  this.finalScore = 0;
  this.throwsLeft = 21;
  this.framesPlayed = 0;
  this.totalScore = 0;
  this.currentFrameScores=[]
  this.bonusArray=[]
  this.results=[]
  this.isStrikeRound = false
  this.bonusHandler = new BonusHandler();

  this.updateIfStrike = function(score){
    if(score == 10){
      this.isStrikeRound = true;
    }

  }

  this.updateCurrentFrameScores=function(score){
    this.currentFrameScores.push(score);
  }

  //PRIMED FOR REMOVAL
  this.updateTotalScoreAfterBonus=function(frameNumber){
    frameResults = this.results[frameNumber]
    throw1= frameResults.throw1
    throw2= frameResults.throw2
    bonus = frameResults.bonus
    total = throw1 + throw2 + bonus
    this.totalScore += total
  }

  //PRIMED FOR REMOVAL
  this.applyBonus = function(score){
    bonus = this.bonusArray.shift();
    frameNumber = bonus.frameIndex;
    throwsLeft = bonus.updatesLeft;
    this.results[frameNumber].bonus += score;
    bonus.updatesLeft=throwsLeft-1;
    if (bonus.updatesLeft > 0){
      this.bonusArray.push(bonus)
    }else{
      this.updateTotalScoreAfterBonus(frameNumber)
    }
  }

  //PRIMED FOR REMOVAL
  this.applyBonusPointsIfRequired = function(score){
    if(this.isBonusActive()){
      numberOfBonuses = this.bonusArray.length
      for (i = 0; i < numberOfBonuses; i++) {
        this.applyBonus(score);
      }

    }

  }

  this.throwBall = function(score){
    if (this.throwsLeft>0){
      this.updateCurrentFrameScores(score);
      this.updateIfStrike(score);


      //PRIMED TO UPDATE
      this.applyBonusPointsIfRequired(score);

      if(this.isFrameOver()||this.isStrikeRound){
        //Append the Results to the scoresheet regardless of bonus
        if(this.isStrikeRound){
          this.results[this.framesPlayed]={
            throw1: this.currentFrameScores[0],
            throw2: 0,
            bonus: 0
          }
        }else{
            this.results[this.framesPlayed]={
            throw1: this.currentFrameScores[0],
            throw2: this.currentFrameScores[1],
            bonus: 0
          }
        }
        this.currentFrameScores=[]
        //Check if there is a bonus and if yes then activate bonus


        if(this.isBonus()){

          //PRIMED TO UPDATE
          if(this.isStrikeRound){
            this.activateStrikeBonus();
          }else{
            this.activateSpareBonus();
          }



        }else{
          frameScore = this.results[this.framesPlayed].throw1 + this.results[this.framesPlayed].throw2;
          this.totalScore += frameScore;
          this.currentFrameScores=[];
        }
        //Update frames at the end of the frame over check for correct referencing
        this.framesPlayed +=1
      }


      this.updateThrowsLeft();
      this.isStrikeRound = false
    }
    // this.updateFramesPlayed();

    console.log("Ball Thrown, throwsLeft:" + this.throwsLeft);
    console.log("Frames Played:" + this.framesPlayed);
  }

  this.updateThrowsLeft = function(){
    if(this.isStrikeRound){
      this.throwsLeft-=2;
    }
    else if (this.throwsLeft > 2){
      this.throwsLeft -= 1;
    }else if (this.throwsLeft == 2){
      this.throwsLeft -= 2;
    }
  }


  this.isBonus = function(){
    throw1 = this.results[this.framesPlayed].throw1
    if (throw1 == 10){
      return true
    }
    throw2 = this.results[this.framesPlayed].throw2
      return (throw1+throw2==10)
  }
  ///PRIMED TO REMOVE
  this.isBonusActive = function(){
    return this.bonusArray.length>0
  }

  this.activateSpareBonus = function(){
    this.bonusArray.push({frameIndex:this.framesPlayed, updatesLeft: 1})

  }

  this.activateStrikeBonus = function(){
    this.bonusArray.push({frameIndex:this.framesPlayed, updatesLeft: 2})
  }

  this.isFrameOver=function(){

    notFirstThrow = this.throwsLeft<21;
    endOfRegularFrame = this.throwsLeft%2 == 0;
    endOfGame = this.throwsLeft ==1;
    return ((notFirstThrow && endOfRegularFrame)|| endOfGame)
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
