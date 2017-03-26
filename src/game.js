function Game() {
  this.eachFrameScore = [];
};

var x;

Game.prototype.grandTotal = function(){
  this.eachFrameScore.reduce(function(y, z){
    return x = y + z;
  }, 0);
  return x;
};
