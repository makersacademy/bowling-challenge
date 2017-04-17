//                                        (O)           (O)
//                                        ||     (O)    ||
//   .----.                               ||     ||     ||
//  /   O O\                             /  \    ||    /  \
//  '    O  '                           :    :  /  \  :    :
//  \      /                            |    | :    : |    |
// __`----'______________________________\__/__|    |__\__/____
//                                              \__/
function Game(frameClass) {

  this.frameHandler = frameClass
  this.results = []
  this.framesPlayed=0;
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
  if(this.framesPlayed === 10){
    throw new TypeError("Game is over, reset to play again")
  }
  else if (this.frameHandler.isComplete){
    this.logResult();
    this.framesPlayed ++;
    this.frameHandler.startFrame();
  }
  this.frameHandler.startRound();
}

Game.prototype.printResults = function(){
  for (i = 0; i < game.results.length; i++) {
    console.log(game.results[i]);
}
}
