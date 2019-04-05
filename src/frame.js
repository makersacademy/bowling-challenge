function Frame(){
  this.balls = [];
};


Frame.prototype.recordScore = function(score){
  this.balls.push(score);
};
