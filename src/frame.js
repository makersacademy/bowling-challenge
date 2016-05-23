function Frame(game){
  this.game = game
  this.totalPins = 0
  this.pinsLeft = 10
  this.bowl1 = 0
  this.bowl2 = 0
  this.bonus1 = 0
  this.bonus2 = 0
  this.frameNumber = 1
}

Frame.prototype.gameOver = function () {
  if (this.frameNumber === 10) {
    throw("game over")
  }
}

Frame.prototype.firstBowl = function(pins){
  this.gameOver();
  this.bowl1 += pins;
  this.pinsLeft -= this.bowl1;
  this.endCurrentFrameCheck();
}

Frame.prototype.secondBowl = function(pins){
  this.gameOver();
  this.bowl2 += pins;
  this.pinsLeft -= this.bowl2;
  this.endCurrentFrame();
}

Frame.prototype.endCurrentFrameCheck = function(pins) {
  if(this.strike()) {
    this.lastFrameBonus()
  }
  if(!this.strike()) {
    if(this.pinsLeft === 0) {
      this.game.updateScore();
      this.game.strike = true;
    }
  }
}

Frame.prototype.frameNumber = function () {
  return this.frameNumber
}

Frame.prototype.endCurrentFrame = function(pins) {
  if(this.strike()) {
    this.bonus2 += pins
  }
  if(this.bowl1 > 0 && this.bowl2 === 10) {
    this.game.updateScore(this);
    this.game.strike = true;
  }
  else if (this.pinsLeft === 0) {
    this.game.updateScore(this);
    this.game.spare = true;
  }
  else{
    this.game.updateScore(this);
  }
}

Frame.prototype.lastFrameBonus = function(pins) {
  if (this.strike()) {
    this.bonus1 += pins;
  }
  else if (this.spare()) {
    this.bonus1 += pins;
  }
}

Frame.prototype.strike = function() {
  if(this.frameNumber === 'strike') {
    return true;
  }
}

Frame.prototype.spare = function() {
  if (this.frameNumber === 'spare') {
    return true;
  }
}