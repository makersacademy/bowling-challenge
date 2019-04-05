function Frame(){
  this.balls = [];
  this.completed = false;
  this.STRIKE = 10;
};


Frame.prototype.recordScore = function(score){
  if (this.completed != true) {
    this.balls.push(score);
    if (score === this.STRIKE) { this.completed = true; }
    if (this.balls.length === 2) { this.completed = true; }
  }
};

Frame.prototype.isComplete = function(){
  return this.completed;
};
