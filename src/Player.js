function Player(game = new Game()){
  thiz = this;
  thiz.game = game;
  thiz.pins = 10;
};

Player.prototype.throwBall = function(){
  var roll = thiz.pinTracker(thiz.pinsKnocked());
  thiz.game.updateFrameScore(roll);
  thiz.frameOver();
};

Player.prototype.pinsKnocked = function(){
  return Math.floor(Math.random() * 10);
}

Player.prototype.pinTracker = function(pinsHit){
  var pinChecker = thiz.pins;
  if(pinsHit > pinChecker){
    thiz.pins = 0;
    return pinChecker;
  }
  else {
    thiz.pins -= pinsHit;
    return pinsHit;
  }
}

Player.prototype.frameOver = function(){
  if (thiz.game._rollTracker === thiz.game.max_rolls){
    thiz.pins = 10;
  }
}
