function Player(){}

var game;

Player.prototype.startGame = function(){
  game = new Game();
  return game;
};

Player.prototype.score = function(){
  return game.score;
};

Player.prototype.throwBall = function(pointsTipe){
  game.turn(pointsTipe);
}
