function Frame(){
  this.turnOne = 0;
  this.turnTwo = 0;
  this.score = 0;
};


Frame.prototype.countScore = function(turn){
  this.score += turn;
};
