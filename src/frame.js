function Frame() {
  this.score = []
};

Frame.prototype.viewScore = function(){
  var sum = this.score.reduce(function(a, b) {return a + b;}, 0);
  return sum
};

Frame.prototype.gutter = function(){
  this.score = [0]
};

Frame.prototype.strike = function(){
  this.score = [10]
};

Frame.prototype.roll1 = function(num){
  if ( num > 9 || num < 0) {
    throw new Error("Cannot exceed 9, if you want to score 10 please use strike function");
  } else {
  this.score.push(num);
  }
};

Frame.prototype.roll2 = function(num){
  var score = this.score[0]
  if ( score + num > 10) {
    throw new Error("Cannot exceed 10 in two rolls");
  } else {
  this.score.push(num);
  }
};
