'use strict'

function Bowling() {
  this.game = []
  this.currentFrame = []
  this.outcomes = []
}

Bowling.prototype.bowl = function(){
  return Math.floor(Math.random() * 11);
};

Bowling.prototype.bowlFrame = function(){
  var bowl1
  var bowl2
  bowl1 = Math.floor((Math.random() * 11));
  this.currentFrame.push(bowl1);
  if (bowl1 <= 10){
    bowl2 = Math.floor((Math.random() * (11-bowl1)));
    this.currentFrame.push(bowl2);
  }
  this.game.push(this.currentFrame);
};

Bowling.prototype.determineOutcomeofFrame = function(){
  if(this.currentFrame[0] >= 10) {
    this.outcomes.push("strike");
  } else if (this.currentFrame[0] + this.currentFrame[1] === 10) {
      this.outcomes.push("spare");
    }
    else {
      this.outcomes.push("mediocre");
    }
};
