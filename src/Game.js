function Game(){
  this.currentScore = 0
  this.currentFrame = 1
}

// GETTERS

Game.prototype.getCurrentScore = function () {
  return this.currentScore
}

Game.prototype.getCurrentFrame = function () {
  return this.currentFrame
}

// ADD SCORE

Game.prototype.addRoll = function (roll) {
  if (this.currentFrame <= 10) {
    this.currentScore += roll
    this.addFrame()
  }
};

// PRIVATE

Game.prototype.addFrame = function() {
  if (this.currentFrame < 10){
    this.currentFrame += 1
  }
}
