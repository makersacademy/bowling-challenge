bowl = function() {
  this.frames[this.currentFrame - 1].takeTurn(this.ballPins.length)

  if(this.frames[this.currentFrame - 1].rollTwo === null) { this.ballPins.push(this.frames[this.currentFrame - 1].rollOne)
  } else { this.ballPins.push(this.frames[this.currentFrame - 1].rollTwo)}

  if(this.frames[this.currentFrame - 1].isFinished) { this.currentFrame++ }

  this.updateScores(this.ballPins)
};
