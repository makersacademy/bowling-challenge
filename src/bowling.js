var Game = function(){
  this.frames = [];
  this.frame = 0
  this.strike = false
  this.spare = false
};

Game.prototype.addFrame = function(){
  this.frame += 1
  this.currentRound = 1
  this.frames.push({frame: this.frame, round: 1, score: null})
}

Game.prototype.currentFrame = function(){
  return this.frames[(this.frames.length - 1)];
};

Game.prototype.bonusFrame = function(){
  
  if(this.currentFrame().round === 1){
    this.spare = false;
    return this.frames[(this.frames.length - 2)]

  }else{

    this.strike = false;
    return this.frames[(this.frames.length - 3)]

  };
};

Game.prototype.addScore = function(){
  this.frames.push(this.currentFrame());
};

Game.prototype.roundScore = function(thisScore){

        this.currentFrame().score += thisScore;

    if (this.strike === true){
      this.bonusFrame().score += thisScore;
    }else if ((this.spare === true) && (this.currentFrame().round === 1)){
        this.bonusFrame().score += thisScore;
    }else{
      this.addScore()
      }
      this.addScore()

    if(this.isStrike()==true){
      this.addFrame();
    }else{

      this.isSpare();

      this.isNewFrame();
};
};

Game.prototype.isNewFrame = function(){
    if (this.currentFrame().round === 2){

      this.addFrame();
    }else if(this.currentFrame().round === 1){
      this.currentFrame().round += 1;
    }
}

Game.prototype.isStrike = function(){
  if ((this.currentFrame().score === 10)&&(this.currentFrame().round === 1)){
    this.strike = true
    return true}

  else{
    false
  };
};

Game.prototype.isSpare = function(){
  if (this.currentFrame().score === 10){
    this.spare = true
    return true}
  else{
    return false
  };
};
