var Frame = function(){
  this.score = 0;
  this.number = 1;
};


Frame.prototype.score = function(score) {
  return score;
};

// Frame.prototype.number = function(number) {
//   return this.number;
// };

Frame.prototype.rollBall = function(){
  return this.number+=1;
};