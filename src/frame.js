function Frame(){
  this.balls = [];
  this.completed = false;
};


Frame.prototype.recordScore = function(score){
  this.balls.push(score);
  if (this.balls.length === 2) { this.completed = true; }
};

Frame.prototype.isComplete = function(){
  return this.completed;
};
