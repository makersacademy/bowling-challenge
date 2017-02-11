function Player(game = new Game()){
  this.game = game;
  this.pins = 10;
};

Player.prototype.throwBall = function(){
  var roll = this.pinTracker(this.pinsKnocked());
  this.game.updateFrameScore(roll);
  this.frameOver();
};

Player.prototype.pinsKnocked = function(){
  return Math.floor(Math.random() * 10);
}

Player.prototype.pinTracker = function(pinsHit){
  var pinChecker = this.pins;
  if(pinsHit > pinChecker){
    this.pins = 0;
    return pinChecker;
  }
  else {
    this.pins -= pinsHit;
    return pinsHit;
  }
}

Player.prototype.frameOver = function(){
  if (this.game._rollTracker === 1){
    this.pins = 10;
  } 
}
