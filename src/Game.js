function Game(){
  this.MAX_FRAMES = 10;
  this.frames = [];
  this.score = 0;
};

Game.prototype.play = function(){
 for(i = 0; i < 10; i++){
    var frameGame = new Frame(i)
    this.frames.push(frameGame)
  };

  this.currentFrame = this.frames[0]
};

Game.prototype.roll1 = function(downPins){
  if (!this.currentFrame.scoreRoll1) {
    this.currentFrame.scoreRoll1 = downPins;

    if(this.currentFrame.scoreRoll1 === 10) {
      this.currentFrame.frameResult = "Strike"
      this.endFrame()
    }
  }
  else { console.log("roll1 is already been done") }
}

Game.prototype.roll2 = function(downPins){
  if (this.currentFrame.scoreRoll1 && !this.currentFrame.scoreRoll2 && downPins <= 10 - this.currentFrame.scoreRoll1 ) {
    this.currentFrame.scoreRoll2 = downPins;

    if(this.currentFrame.scoreRoll1 + this.currentFrame.scoreRoll2 === 10) {
      this.currentFrame.frameResult = "Spare"
    }
    this.endFrame()
  } else {
    throw new Error(`Number is not valid, insert a number <= ${10 - this.currentFrame.scoreRoll1}`)
  }
};

Game.prototype.endFrame = function() {
  if(!this.currentFrame.isFirst()){
    this.settlePreviousFrame();
    this.updateScore();
  }
  this.currentFrame.finalScore = this.currentFrame.getScoreRolls();
  this.previousFrame = this.currentFrame
  this.currentFrame = this.frames[this.currentFrame.index + 1];
};

Game.prototype.settlePreviousFrame = function() {
  bonus = this.calculateBonus(this.currentFrame) || 0
  this.previousFrame.finalScore = bonus + this.previousFrame.getScoreRolls();
}

Game.prototype.updateScore = function(){
  this.score += this.previousFrame.finalScore
};

Game.prototype.calculateBonus = function(currentFrame){
  var previousFrame = this.frames[currentFrame.index - 1]
  if(previousFrame.hasBonus()){
    if(previousFrame.isStrike()){
      return currentFrame.getScoreRolls();
    } else {
      return currentFrame.scoreRoll1;
    }
  }
};

Game.prototype.extraRoll1 = function(downPins) {
  this.extraRoll1Score = downPins;
}

Game.prototype.extraRoll2 = function(downPins){
  this.extraRoll2Score = downPins
};

Game.prototype.calculateBonusLastFrame = function() {
  if(this.previousFrame.isLast()){
    if(this.previousFrame.isStrike()){
      this.lastFrameScore = (this.previousFrame.getScoreRolls() + this.extraRoll1Score + this.extraRoll2Score);
    }
    if(this.previousFrame.isSpare()){
      this.lastFrameScore = (this.previousFrame.getScoreRolls() + this.extraRoll1Score);
    }
  }
}

Game.prototype.calculateTotalScore = function() {
  this.totalScore = this.lastFrameScore + this.score
};
