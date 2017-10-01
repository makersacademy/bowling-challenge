var Game = function(){
  this.frames = [];
};

Game.prototype.addFrame = function(frameNumber){
  // var frame =
  this.frames.push({frame: frameNumber, round: 1, score: null})
}

Game.prototype.currentFrame = function(){
  return this.frames[(this.frames.length - 1)];
};

Game.prototype.roundScore = function(thisRound, thisScore){
  this.currentFrame().round = thisRound
  this.currentFrame().score = thisScore
};
