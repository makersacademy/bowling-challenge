/*global ScoreCard, Frame*/

function Game() {
  this.frames = [];
  this.gameRolls = [];
  this.scoreCard = new ScoreCard(this, this.frames);
}

Game.prototype.roll = function( roll ) {
  if( this.isGameOver()  ) {
    return 'Game Over. Final score: ' + this.score();
  }
  this.currentFrame().addRoll( roll );
  this.gameRolls.push( roll );
}

Game.prototype.score = function( frameNumber ) {
  return this.scoreCard.score ( frameNumber )
}

Game.prototype.currentFrame = function() {
  if( this.isLastFrameFinished() ) {
    this.addFrame();
  }
  return this.lastFrame();
}

Game.prototype.addFrame = function() {
  var options = { rollIndex: this.gameRolls.length,
                  frameIndex: this.frames.length };
  this.frames.push( new Frame( options ) );
}

Game.prototype.lastFrame = function() {
  if( this.frames.length === 0 ) {
    this.addFrame();
  }
  return this.frames[ this.frames.length - 1 ];
}

Game.prototype.isLastFrameFinished = function() {
  return this.lastFrame().isFinished();
}

Game.prototype.isGameOver = function() {
  return this.frames.length === 10 && this.frames[9].isFinished();
}
