var Game = function(){
  this.score = 0;
  this.number = 1;
  this.framescore = [];
};


Game.prototype.score = function () {
  // if (this.framescore !== []) {
  //   return this.framescore.reduce(function(a,b) { return a+b; } );
  // };
  return this.score
};

Game.prototype.rollBall = function(x, y, z){
if (this.number >= 11) {
  throw new Error('The game is over');
  };
  this.number+=1;

if (((x+y) !== 10) && (x !== 10)) {
  this.framescore.push(x+y);
  };
};