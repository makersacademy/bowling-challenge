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
  this.score

  this.updateIfStrike = function(score){
    if(score == 10){
      this.isStrikeRound = true;
    }

  }

  this.updateCurrentFrameScores=function(score){
    this.currentFrameScores.push(score);
  }


  this.isBonusActive = function(){
    return this.bonusHandler.isBonusActive();
  }

  this.applyBonusPointsIfRequired = function(score){
    this.updateBonusHandlerState();
    this.results = this.bonusHandler.updateBonusPointsIfRequired()
    this.totalScore = this.bonusHandler.totalScore;
  }

  this.throwBall = function(score){
    this.score=score
    if (this.throwsLeft>0){
      this.updateCurrentFrameScores(score);
      this.updateIfStrike(score);



      this.applyBonusPointsIfRequired(score);

      if(this.isFrameOver()||this.isStrikeRound){
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


        if(this.isBonus()){

          if(this.isStrikeRound){
            this.bonusHandler.activateStrikeBonus();
          }else{
            this.bonusHandler.activateSpareBonus();
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




  this.isFrameOver=function(){

    notFirstThrow = this.throwsLeft<21;
    endOfRegularFrame = this.throwsLeft%2 == 0;
    endOfGame = this.throwsLeft ==1;
    return ((notFirstThrow && endOfRegularFrame)|| endOfGame)
  }

  this.throwsDone =function(){
    Math.modulus(this.throwsLeft-21)
  }

  this.finishGame = function(){
    if(this.throwsLeft==0){
      this.finalScore = this.totalScore
    }
  }

  this.updateBonusHandlerState = function(){
    inputs = {score: this.score,
    results: this.results,
    framesPlayed: this.framesPlayed,
    isStrikeRound: this.isStrikeRound,
    totalScore: this.totalScore
    }
    this.bonusHandler.updatePlayState(inputs)
  }


}
