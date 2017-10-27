function Frame() {
  this.score = 0
};

Frame.prototype.viewScore = function(){
  return this.score;
};

Frame.prototype.gutter = function(){
  this.score = 0
};
