var Game = function(){
  this.frames = [];
  // this.currentRound = 1
  this.frame = 0
  this.strike = false
};

Game.prototype.addFrame = function(){
  this.frame += 1
  this.currentRound = 1
  this.frames.push({frame: this.frame, round: 1, score: null})
}

Game.prototype.currentFrame = function(){
  return this.frames[(this.frames.length - 1)];
};

Game.prototype.addScore = function(){
  this.frames.push(this.currentFrame());
};

Game.prototype.roundScore = function(thisScore){
    this.currentFrame().score += thisScore;
    // console.log(this.currentFrame())
    this.addScore();
    // console.log(this.currentFrame())
  if(this.isStrike()==true){
    // console.log(this.currentFrame())
    this.addFrame();
    // this.checkRound();
    // console.log(2)
    // console.log(this.currentFrame())
  }else{
  // this.checkRound();
  console.log('one', this.currentFrame().round)
  // console.log('two', this.currentRound)
  this.isNewFrame();
    console.log('three', this.currentFrame().round)
      // console.log('four', this.currentRound)
  // this.currentFrame().round = this.currentRound;
  // this.currentFrame().score += thisScore;
  // this.isStrike();
  this.isSpare();
};
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
    }else if(this.currentFrame().round === 1){
      // this.currentRound += 1;
      this.currentFrame().round += 1;
    }
}

Game.prototype.isStrike = function(){
  if (this.currentFrame().score === 10){
    this.strike = true
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
