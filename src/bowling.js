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
};

Game.prototype.isGameOver = function(){
  if((this.frame === this.MAX_FRAMES) && (this.currentFrame().roundTwo != null)&&(this.strike != true)&&(this.spare != true)){
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

Game.prototype.addTotal = function(){
  this.currentFrame().scoreTotal += this.currentScore;
  this.TOTAL_SCORE += this.currentScore;
  this.currentScore = 0;
};

Game.prototype.roundScore = function(thisScore){
    this.currentScore = thisScore

    if ((this.isGameOver())||(this.currentFrame().frameTenBonusRound != null)){
      return 'GAME IS OVER'

    }else if((this.isStrike())&&(this.frame != this.MAX_FRAMES)){
    this.strike = true;
    this.currentFrame().roundOne += this.currentScore;
    this.addTotal();
    this.addFrame();

  } else if (this.frame === this.MAX_FRAMES){
    this.finalFrame();

  } else if (this.currentFrame().roundOne === null){
    this.currentFrame().roundOne += this.currentScore;
    this.bonusScore();
    this.addTotal();


  } else{
    this.currentFrame().roundTwo += this.currentScore;
    this.bonusScore();
    this.addTotal();
    this.isSpare();
    this.addFrame();
    };
  };

Game.prototype.bonusScore = function(){
  if (this.strike === true){
    this.bonusFrame().scoreTotal += this.currentScore;
    this.BONUS_POINTS += this.currentScore

  }else if (this.spare === true){
      this.bonusFrame().scoreTotal += this.currentScore;
      this.BONUS_POINTS += this.currentScore;
    };
};

Game.prototype.isStrike = function(){
  if ((this.currentScore === 10)&&(this.currentFrame().roundTwo === null)){
    this.strike = true;
    return true
    }
  else{
    return false
  };
};

Game.prototype.isSpare = function(){
  if (this.currentFrame().scoreTotal === 10){
    this.spare = true;
    return true}
  else{
    return false
  };
};

Game.prototype.finalFrame = function(){
  if (this.currentFrame().roundOne === null){
    this.isStrike();
    this.currentFrame().roundOne += this.currentScore;
    this.addTotal();

}else if ((this.currentFrame().roundOne != null)&&(this.currentFrame().roundTwo === null)){

      if (this.strike === true){
          this.BONUS_POINTS += this.currentScore};
          this.currentFrame().roundTwo += this.currentScore;
          this.addTotal();
          this.isSpare();

}else if((this.strike === true)&&(this.currentFrame().roundOne != null)&&(this.currentFrame().roundTwo != null)){
    this.finalFrameBonus();
    this.strike = false;

}else if((this.spare === true)&&(this.currentFrame().roundOne != null)&&(this.currentFrame().roundTwo != null)){
  this.finalFrameBonus();
  this.spare = false;

}else{
    return 'GAME IS OVER'
  };

  Game.prototype.finalFrameBonus = function(){
    this.currentFrame().frameTenBonusRound += this.currentScore
    this.BONUS_POINTS += this.currentScore
    this.addTotal();
  }
};
