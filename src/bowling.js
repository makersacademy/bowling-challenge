var Game = function(){
  this.frames = [];
  this.currentRound = 1
};

Game.prototype.addFrame = function(frameNumber){
  this.frames.push({frame: frameNumber, round: 1, score: null})
}

Game.prototype.currentFrame = function(){
  return this.frames[(this.frames.length - 1)];
};

Game.prototype.roundScore = function(thisScore){
  this.checkRound();
  this.currentFrame().round = this.currentRound;
  this.currentFrame().score += thisScore;
  this.isStrike();
  this.isSpare();
};

Game.prototype.checkRound = function(){
    if (this.currentFrame().score === null){
      this.currentRound = 1}
      else{
      this.currentRound = 2};
};

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
    false
  };
};
