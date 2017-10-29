function Game() {
  this.scores = [0]
};


Game.prototype.viewScore = function(){
  var sum = this.scores.reduce(function(a, b) {return a + b;}, 0);
  return sum
};

Game.prototype.gutterGame = function(){
  this.scores = [0]
};

Game.prototype.perfectGame = function(){
  this.scores =[300]
};

Game.prototype.playFrame = function(){

};
