function Game(){
  this.scores = []
  this.total = 0
  this.currentFrame = []
  this.frameCounter = 0
  this.spare = false
  this.strike = false
  this.SC = 0 // SC is for Strike Counter
};

Game.prototype.inputScore = function(pins) {
    this.strike = this.isStrike()

    if(this.strike) {
      this._addFrame()
      this._newFrame()
    }
    if(this.SC > 0 ) {
      this.total += pins
      this.SC -= 1
    }
    if(pins === 10){
      if(this.SC === 2){
        this.total += pins
      }
      this.SC = 2
    }

  if (this.currentFrame.length == 0) {
    this.currentFrame.push(pins);
    if(this.spare) {
      this.total += pins
    }
  }
  else if(this.currentFrame.length == 1) {
    this.currentFrame.push(pins);
    this._addFrame()
    this.spare = this.isSpare()
    this.currentFrame = []
    this.frameCounter += 1
  }
  return this.total += pins;
};

Game.prototype.isStrike = function() {
  return this.currentFrame[0] === 10;
}

Game.prototype.isSpare = function() {
  return this.currentFrame[0] + this.currentFrame[1] === 10;
}

Game.prototype._newFrame = function() {
  this.currentFrame = []
  this.frameCounter += 1
}

Game.prototype._addFrame = function() {
  this.scores.push(this.currentFrame);
}

Game.prototype.getTotal = function() {
  return this.total;
}

Game.prototype.isGameOver = function() {
  return this.frameCounter == 10
}
