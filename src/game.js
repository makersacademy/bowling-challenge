 function Game(frame) {

  this.scorecard = [];
  this.currentFrame = new Frame();
}

Game.prototype.addFrame = function(){
  this.scorecard.push(this.currentFrame.getScore());
  this.currentFrame = new Frame();

};

Game.prototype.bowl = function(num){
  this.currentFrame.roll(num);
  if(this.currentFrame.checkComplete()){this.addFrame()}
}

Game.prototype._newFrame = function(){
  this.currentFrame.rerack();
}

Game.prototype._complete = function(){
  this.scorecard.length === 10;
}
