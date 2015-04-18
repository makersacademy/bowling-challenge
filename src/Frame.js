var Frame = function(){
  this.score = 0;
  this.number = 1;
};


Frame.prototype.score = function(score) {
  return this.score;
};

// Frame.prototype.number = function(number) {
//   return this.number;
// };

Frame.prototype.rollBall = function(){
if (this.number >= 11) {
  throw new Error('The game is over');
  };
  return this.number+=1;
};