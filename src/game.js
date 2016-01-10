 function Game(frame) {

  this.scorecard = [];
  this.currentFrame = new Frame();
}

Game.prototype.addFrame = function(frame){
  this.scorecard.push(frame);
};

Game.prototype.calculateScore = function(){
  return this.scorecard[0][0] + this.scorecard[0][1];
}

Game.prototype.bowl = function(num){
  this.currentFrame.roll(num);
}
