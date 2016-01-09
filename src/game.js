var Game = function(){
  this.scorecard = [];
};

Game.prototype.addFrame = function(frame){
  this.scorecard.push(frame);
};

Game.prototype.calculateScore = function(){
  return this.scorecard[0][0] + this.scorecard[0][1];
}
