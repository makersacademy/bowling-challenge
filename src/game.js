/*global Frame */

function Game() {
  this.frames = [];
  this.gameRolls = [];
}

Game.prototype.roll = function( roll ) {
  if( this.isGameOver()  ) {
    return 'Game Over. Final score: ' + this.score();
  }
  this.currentFrame().addRoll( roll );
  this.gameRolls.push( roll );
}

Game.prototype.score = function() {
  return this.rollsTotal() + this.calculateBonus();
}

Game.prototype.intermediateScore = function() {
  return '';
}

// PRIVATE METHODS

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

Game.prototype.rollsTotal = function() {
  return this.gameRolls.reduce( function( a, b ) { return a + b; }, 0 );
}

Game.prototype.getBonuses = function() {
  return this.frames.filter( function( frame ) {
    if( frame.bonus() ) {
      return frame.bonus()
    }
  }).map( function( frame ) {
    return frame.bonus();
  });
}

Game.prototype.calculateBonus = function() {
  var bonusTotal = 0,
      rolls = this.gameRolls,
      bonusIndexes = this.getBonuses().reduce( function( a, b ) {
        return a.concat( b );
      }, [] );

  bonusIndexes.forEach( function( i ) { bonusTotal += rolls[ i ]; });

  return bonusTotal;
}
