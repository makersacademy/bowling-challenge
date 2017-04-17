function Game(frameClass) {

  this.frameHandler = frameClass
  this.results = []
}

Game.prototype.logResult = function(){
  var result = this.frameHandler.result;
  frameTotal = result.throw1 + result.throw2;
  this.score += frameTotal;
  this._appendFrameResult(result);

};


Game.prototype._appendFrameResult = function(result){
  this.results.push(result);
}

Game.prototype._updateCumulativeScore = function(result){
  frameTotal = result.throw1 + result.throw2;
  this.score += frameTotal;
}

Game.prototype.playBowling = function(){
  if (this.frameHandler.isComplete){
    this.logResult();
    this.frameHandler.startFrame();
  }
  this.frameHandler.startRound();
}

Game.prototype.printResults = function(){
  for (i = 0; i < game.results.length; i++) {
    console.log(game.results[i]);
}
}
