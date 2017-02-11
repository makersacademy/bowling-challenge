function Player(game = new Game()){
  this.game = game;
};

Player.prototype.throwBall = function(){
  this.game.updateFrameScore(this.pinsKnocked());
};

Player.prototype.pinsKnocked = function(){
  return Math.floor(Math.random() * 10);
}
