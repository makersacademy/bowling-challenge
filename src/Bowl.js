bowl = function() {
  
  this.frames[this.currentFrame - 1].takeTurn(this.ballPins.length)

  if(this.frames[this.currentFrame - 1].rollOneLogged === false) { this.ballPins.push(this.frames[this.currentFrame - 1].rollOne);
    this.frames[this.currentFrame - 1].rollOneLogged = true;
  } else if (this.frames[this.currentFrame - 1].rollOneLogged === true &&
  this.frames[this.currentFrame - 1].rollTwoLogged === false) {
    this.ballPins.push(this.frames[this.currentFrame - 1].rollTwo);
    this.frames[this.currentFrame - 1].rollTwoLogged = true;
  } else if (this.frames[this.currentFrame - 1].rollOneLogged === true &&
  this.frames[this.currentFrame - 1].rollTwoLogged === true && this.currentFrame === 10) {
    this.ballPins.push(this.frames[this.currentFrame - 1].rollThree)}

  if(this.frames[this.currentFrame - 1].isFinished) { this.currentFrame++ }

  this.updateScores(this.ballPins)
};
