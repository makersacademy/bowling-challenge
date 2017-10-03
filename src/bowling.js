var Game = function(){
  this.frameRounds = [];
  this.frame = 1
  this.strike = false
  this.spare = false
  this.TOTAL_SCORE = 0
  this.BONUS_POINTS = 0
};

Game.prototype.addFrame = function(){
  this.frameRounds.push(new Frame(this.frame))
};

Game.prototype.currentFrame = function(){
  return this.frameRounds[(this.frameRounds.length - 1)];
};

Game.prototype.bonusFrame = function(){
  if(this.currentFrame().round === 1){
    this.spare = false;
    return this.frameRounds[(this.frameRounds.length - 2)]

  }else{

    this.strike = false;
    return this.frameRounds[(this.frameRounds.length - 3)]
  };
};

Game.prototype.addScore = function(){
  this.frameRounds.push(this.currentFrame());
};

Game.prototype.roundScore = function(thisScore){
    this.currentFrame().score += thisScore;
    this.currentFrame().scoreTotal += thisScore;
    this.TOTAL_SCORE += thisScore;

    if (this.strike === true){
      this.bonusFrame().scoreTotal += thisScore;
      this.BONUS_POINTS += thisScore;

    }else if ((this.spare === true) && (this.currentFrame().round === 1)){
        this.bonusFrame().scoreTotal += thisScore;
        this.BONUS_POINTS += thisScore;

    }else{
      false
      }

    if(this.isStrike()==true){

      this.frame += 1;
      this.addFrame();

    }else{

      this.isNewFrame();

};
};

Game.prototype.isNewFrame = function(){
    if (this.currentFrame().round === 2){
      this.frame += 1
      this.currentFrame().scoreTotal += (this.frameRounds[this.frameRounds.length - 2]).scoreTotal

      this.isSpare();
      this.addFrame();
    }else if(this.currentFrame().round === 1){

      this.addFrame();
      this.currentFrame().round += 1;
    };
};

Game.prototype.isStrike = function(){
  if ((this.currentFrame().score === 10)&&(this.currentFrame().round === 1)){
    this.strike = true
    return true}

  else{
    false
  };
};

Game.prototype.isSpare = function(){
  if (this.currentFrame().scoreTotal === 10){
    this.spare = true
    return true}
  else{
    return false
  };
};
