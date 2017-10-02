var Game = function(){
  this.frames = [];
  this.currentRound = 1
  this.frame = 0
};

Game.prototype.addFrame = function(){
  this.frame += 1
  this.frames.push({frame: this.frame, round: 1, score: null})
}

Game.prototype.currentFrame = function(){
  return this.frames[(this.frames.length - 1)];
};

Game.prototype.addScore = function(){
  this.frames.push(this.currentFrame());
};

Game.prototype.roundScore = function(thisScore){
  this.checkRound();
  this.isNewFrame();
  this.currentFrame().round = this.currentRound;
  this.currentFrame().score += thisScore;
  this.isStrike();
  this.isSpare();
  // this.addScore();
};

Game.prototype.checkRound = function(){
    if (this.currentFrame().score === null){
      this.currentRound = 1}

      else if(this.currentFrame().round === 2){
      this.currentRound = 1}

      else{
      this.currentRound = 2};
};

Game.prototype.isNewFrame = function(){
    if (this.currentFrame().round === 2){
      this.addFrame();
    }
}

Game.prototype.isStrike = function(){
  if (this.currentFrame().score === 10){
    return true}

  else{
    false
  };
};

Game.prototype.isSpare = function(){
  if ((this.currentFrame().score === 10) && (this.currentFrame().round === 2)){
    return true}
  else{
    return false
  };
};
