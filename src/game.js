function Game(){
  this.totalScores = []
  this.strikes = []
  this.score = 0
  this.currentFrame = new Frame(this)
  this.strike = false
}

Game.prototype.updateScore = function() {
  this.calculateScore()
  this.addScore()
  this.advanceFrame()
  this.lastFrame()
  this.addLastFrameBonus()
}

Game.prototype.advanceFrame = function() {
  this.currentFrame = new Frame(this)
  this.currentFrame.frameNumber ++;
};

Game.prototype.totalScore = function(){
  return this.score = 0
}

Game.prototype.calculateScore = function(frame) {
  if(this.strike === true) {
    this.strikeBonus(frame)
    this.strikes.push(1)
  } else if(this.spare === true) {
    this.spareBonus(frame)
  } else {
    this.score += (this.currentFrame.bowl1 + this.currentFrame.bowl2)
    this.strikes.push(0)
  }
}

Game.prototype.addScore = function () {
  this.totalScores.push(this.score)
}

Game.prototype.strikeBonus = function(frame) {
  if(this.totalScores.length < 10) {
    var lastBallStrike1 = this.strikes[(this.totalScores.length -1)]
    var lastBallStrike2 = this.strikes[(this.totalScores.length - 2)]
    if (lastBallStrike1 === 1 && lastBallStrike2 === 1) {
      this.score += 10
    }
  }
  this.score += ((this.currentFrame.bowl1 + this.currentFrame.bowl2) * 2)
}

Game.prototype.spareBonus = function(frame) {
  this.score += ((this.currentFrame.bowl1 * 2) + this.currentFrame.bowl2)
}

Game.prototype.lastFrame = function () {
  if(this.currentFrame.frameNumber === 11) {
    if(this.strike === true) {
      this.currentFrame.frameNumber = "strike";
    }
    else if(this.spare === true) {
      this.currentFrame.frameNumber = "spare";
    }
    else{
      this.currentFrame.frameNumber = "game over";
    }
  }
}

Game.prototype.addLastFrameBonus = function () {
  if(this.frameNumber === "strike") {
    this.score += (this.currentFrame.bonus1 + this.currentFrame.bonus2);
  }
  else if(this.frameNumber === "spare") {
    this.score += this.currentFrame.bonus1;
  }
}