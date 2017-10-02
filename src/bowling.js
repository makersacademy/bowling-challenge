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
    return this.frames[(this.frames.length - 2)]
  }else{
    return this.frames[(this.frames.length - 3)]
  };
};

Game.prototype.addScore = function(){
  this.frames.push(this.currentFrame());
};

Game.prototype.roundScore = function(thisScore){
  console.log('one', this.bonusFrame())
    this.currentFrame().score += thisScore;
    if (this.isStrikeBonus()){
      this.bonusFrame().score += thisScore;
    }else{
    console.log('one', this.bonusFrame())
    this.addScore()
    }
    // console.log('two', this.currentFrame())
  if(this.isStrike()==true){
    this.addFrame();
  }else{
  // console.log('three', this.currentFrame())
  this.isSpare();
  // console.log('three', this.currentFrame().score)
  this.isNewFrame();
    // console.log('four', this.currentFrame())

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

Game.prototype.isStrikeBonus = function(){
  if(this.strike === true){
    return true
  }
  else{
    return false
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
