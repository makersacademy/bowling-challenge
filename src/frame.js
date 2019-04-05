function Frame(){
  this.balls = [];
  this.completed = false;
};


Frame.prototype.recordScore = function(score){
  if (this.completed != true){
    this.balls.push(score);
    if (this.balls.length === 2) { this.completed = true; }
  }
};

Frame.prototype.isComplete = function(){
  return this.completed;
};
