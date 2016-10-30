'use strict'

function Frame(game) {
  this.currentFrame = []
}

Frame.prototype.bowlFrame = function(game){
  var bowl = Math.floor((Math.random() * 11));
  this.currentFrame.push(bowl);
  if (bowl <= 10){
    bowl = Math.floor((Math.random() * (11-bowl)));
    this.currentFrame.push(bowl);
  }
  game.addFrame(this.currentFrame);
};
