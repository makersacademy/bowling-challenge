var Game = function(){
  this.frames = [];
  this.frameCount = 0
  this.strike = false
  this.spare = false
  this.TOTAL_SCORE = 0
  this.BONUS_POINTS = 0
  this.MAX_FRAMES = 10
  this.currentScore = 0
};

Game.prototype.addFrame = function(){
  this.frameCount += 1;
  this.frames.push(new Frame(this.frameCount));
};

Game.prototype.roundScore = function(roll){
    this.currentScore = roll

  if ((this.isGameOver())&&(this.frames[(this.frames.length-2)])||(this.currentFrame().frameTenBonusRound != null)){
      return 'GAME IS OVER'

    }else if((this.isStrike())&&(this.frameCount != this.MAX_FRAMES)){
    // this.spare = false
    this.multipleStrike();
    this.currentFrame().roundOne += this.currentScore;
    this.addTotal();
    this.addFrame();

  } else if (this.frameCount === this.MAX_FRAMES){
    this.finalFrame();

  } else if (this.currentFrame().roundOne === null){
    this.currentFrame().roundOne += this.currentScore;
    this.bonusScore();
    this.addTotal();

  } else{
    if((this.currentFrame().roundOne + this.currentScore) > 10){
      return 'INVALID ENTRY'
    };
    this.currentFrame().roundTwo += this.currentScore;
    this.bonusScore();
    this.addTotal();
    this.isSpare();
    this.addFrame();
    };
  };

  Game.prototype.currentFrame = function(){
    return this.frames[(this.frames.length - 1)];
  };

  Game.prototype.addTotal = function(){
    this.currentFrame().scoreTotal += this.currentScore;
    this.TOTAL_SCORE += this.currentScore;
    this.currentScore = 0;
  };

Game.prototype.isGameOver = function(){
  if((this.frameCount === this.MAX_FRAMES) && (this.currentFrame().roundTwo != null)&&(this.strike != true)&&(this.spare != true)){
    return true
  // }else if(this.frameCount === this.MAX_FRAMES)
  }else{
    return false
  };
};

Game.prototype.bonusFrame = function(){
  if(this.currentFrame().roundTwo === null){
    this.spare = false;
    return this.frames[(this.frames.length - 2)]
  }else{
    this.strike = false;
    return this.frames[(this.frames.length - 2)]
  };
};

Game.prototype.strikeFrameBonus = function(){
  // this.frames[(this.frames.length - 3)].scoreTotal += this.currentScore;
  if(this.frames[(this.frames.length - 2)].roundOne === 10){
    this.BONUS_POINTS += this.currentScore
  };
};

Game.prototype.multipleStrike = function(){
  if(this.frames.length > 1){
    this.bonusScore();
  }else{
    return false
  };
};

Game.prototype.bonusScore = function(){
  if ((this.strike === true)&&(this.frames[(this.frames.length - 2)].roundOne === 10)){
    this.bonusFrame().scoreTotal += this.currentScore;
    if(this.frames.length > 2){
      this.strikeFrameBonus();
    }
    this.BONUS_POINTS += this.currentScore;

  }else if (this.spare === true){
      this.bonusFrame().scoreTotal += this.currentScore;
      this.BONUS_POINTS += this.currentScore;
    };
};

Game.prototype.isStrike = function(){
  if ((this.currentScore === 10)&&(this.currentFrame().roundTwo === null)&&(this.currentFrame().roundOne === null)){
    this.strike = true;
    // this.spare = false;
    this.currentFrame().frameStrike = 'X'
    return true
    }
  else{
    return false
  };
};

Game.prototype.isSpare = function(){
  if (this.currentFrame().scoreTotal === 10){
    this.spare = true;
    this.currentFrame().frameSpare = '/'
    return true}
  else{
    return false
  };
};

Game.prototype.finalFrame = function(){
  if (this.currentFrame().roundOne === null){
    this.isStrike();
      if(this.strike === true){
        this.bonusFrame().scoreTotal += this.currentScore;
        this.strikeFrameBonus()
      };
    this.currentFrame().roundOne += this.currentScore;
    this.addTotal();

}else if ((this.currentFrame().roundOne != null)&&(this.currentFrame().roundTwo === null)){

      if (this.strike === true){
          this.BONUS_POINTS += this.currentScore};
          this.currentFrame().roundTwo += this.currentScore;
          this.addTotal();
          this.isSpare();
          if(this.currentFrame().scoreTotal < 10){
            this.strike = false;
          }

}else if((this.strike === true)&&(this.currentFrame().roundOne != null)&&(this.currentFrame().roundTwo != null)){
    this.finalFrameBonus();
    this.strike = false;

}else if((this.spare === true)&&(this.currentFrame().roundOne != null)&&(this.currentFrame().roundTwo != null)){
  this.finalFrameBonus();
  this.spare = false;

// }else{
//     return 'GAME IS OVER'
  };

  Game.prototype.finalFrameBonus = function(){
    this.currentFrame().frameTenBonusRound += this.currentScore
    this.BONUS_POINTS += this.currentScore
    this.addTotal();
    return 'GAME IS OVER'
  }
};

  Game.prototype.finalScore = function(){
    return this.TOTAL_SCORE + this.BONUS_POINTS;
  };

  Game.prototype.gutterGame = function(){
    if((this.TOTAL_SCORE === 0)&&(this.isGameOver())){
      return true
    }else{
      return false
    };
  };

  Game.prototype.perfectGame = function(){
      if((this.finalScore() === 300)&&(this.isGameOver())){
        return true
      }else{
        return false
      };
  };
