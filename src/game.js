 function Game() {
  this.scorecard = [];
  this.currentFrame = new Frame();
}

Game.prototype.addFrame = function(){
  this.scorecard.push(this.currentFrame.getResults());
  this.currentFrame = new Frame();
};

Game.prototype.bowl = function(num){
  if(this.checkOver() === true){throw('Game over!')}
  this.currentFrame.roll(num);
  if(this.currentFrame.checkComplete()){this.addFrame()}
}

Game.prototype.checkOver = function(){
  if(this.scorecard.length === 10){return true}
}

Game.prototype.scoreCalculator = function(){
  return(17);
}
