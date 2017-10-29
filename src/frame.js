function Frame() {
  this.score = 0
};

Frame.prototype.viewScore = function(){
  return this.score
};

Frame.prototype.gutter = function(){
  this.score = 0
};

Frame.prototype.spare = function(){
  this.score = 10
};

Frame.prototype.strike = function(){
  this.score = 11
};

Frame.prototype.roll1 = function(num){
  if ( num > 9 || num < 0) {
    throw new Error("Cannot exceed 9, if you want to score 10 please use strike function");
  } else {
  this.score += num;
  }
};

Frame.prototype.roll2 = function(num){
  if ( (this.score + num) > 10) {
    throw new Error("Cannot exceed 10 in two rolls");
  } else {
  this.score += num;
  }
};
