function Game(){

};

var score = 0

Game.prototype.roll = function(pins){
  score += pins;
};

Game.prototype.score = function(){
  return score;
};
