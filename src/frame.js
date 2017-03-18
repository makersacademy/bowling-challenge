function Frame(){
  this.SCORE = 0;
  this.score = this.SCORE;
}


Frame.prototype.roll = function(){
  return Math.floor((Math.random() * 11) + 0);
};
