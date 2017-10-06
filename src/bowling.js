var Game = function(){
  this.frameRounds = [];
  this.frame = 0
  this.strike = false
  this.spare = false
  this.TOTAL_SCORE = 0
  this.BONUS_POINTS = 0
  this.MAX_FRAMES = 10
  this.currentScore = 0
};

Game.prototype.addFrame = function(){
  this.frame += 1;
  this.frameRounds.push(new Frame(this.frame));
  this.currentScore = 0;
};

Game.prototype.isGameOver = function(){
  if((this.currentFrame().frameNumber === this.MAX_FRAMES) && (this.currentFrame().roundTwo != null)){
    return true
  }else{
    return false
};
};

Game.prototype.currentFrame = function(){
  return this.frameRounds[(this.frameRounds.length - 1)];
};

Game.prototype.bonusFrame = function(){
  if(this.currentFrame().roundTwo === null){
    this.spare = false;
    return this.frameRounds[(this.frameRounds.length - 2)]

  }else{
    this.strike = false;
    return this.frameRounds[(this.frameRounds.length - 2)]
  };
};

// Game.prototype.addScore = function(){
//   this.frameRounds.push(this.currentFrame());
// };

Game.prototype.addTotal = function(){
  this.currentFrame().scoreTotal += this.currentScore;
  this.TOTAL_SCORE += this.currentScore;
};

Game.prototype.roundScore = function(thisScore){

      this.currentScore = thisScore
      if (this.strike === true){
        this.bonusFrame().scoreTotal += this.currentScore;
        this.BONUS_POINTS += this.currentScore

      }else if ((this.spare === true) && (this.currentFrame().roundOne != null)){
          this.bonusFrame().scoreTotal += this.currentScore;
          this.BONUS_POINTS += this.currentScore;
        }


    if (this.isGameOver()){
      return 'GAME IS OVER'
    }else if(this.isStrike()===true){
    this.strike = true;
    this.currentFrame().roundOne += this.currentScore;
    this.addTotal();

    this.addFrame();
  } else if (this.currentFrame().frameNumber === this.MAX_FRAMES){
    this.finalFrame();
  }else if (this.currentFrame().roundOne === null){
    // this.bonusFrame();
    this.currentFrame().roundOne += this.currentScore;
    this.addTotal();
    // this.isStrike();
  }else{
    this.currentFrame().roundTwo += this.currentScore;
    this.addTotal();
    this.isSpare();
    this.addFrame();
  };
  // }
  // console.log('A', this.frameRounds)
  // console.log('A', this.BONUS_POINTS)
  //   console.log('A', this.strike)

    //
    // console.log('B', this.frameRounds)
    // console.log('B', this.BONUS_POINTS)
    //   console.log('A', this.strike)
  };

Game.prototype.bonusScore = function(){

}


Game.prototype.isStrike = function(){
  if ((this.currentScore === 10)&&(this.currentFrame().roundTwo === null)){
    // this.frame += 1;
    return true
    // this.addFrame()
    }
  else{
    return false
  };
};

// Game.prototype.firstRound = function(){
//   return
// }

Game.prototype.isSpare = function(){
  if (this.currentFrame().scoreTotal === 10){
    this.spare = true
    return true}
  else{
    return false
  };
};

Game.prototype.finalFrame = function(){
  if (this.currentFrame().roundOne === null){
    this.currentFrame().roundOne += this.currentScore;
    this.addTotal();
}else if ((this.currentFrame().roundOne != null)&&(this.currentFrame().roundTwo === null)){
  this.currentFrame().roundTwo += this.currentScore;
  this.addTotal();
  this.isSpare()
}else{
    return 'GAME IS OVER'
}
};
