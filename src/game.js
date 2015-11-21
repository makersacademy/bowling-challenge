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

Game.prototype.score = function( frameNumber ) {
  frameNumber = frameNumber !== undefined ? frameNumber : this.frames.length;
  if(this.isNotReadyForScoring( frameNumber ) ) { 
    return ''; 
  }
  
  return  this.bonus( frameNumber ) + this.rollsTotal( frameNumber );
}

Game.prototype.isNotReadyForScoring = function( frameNumber ) {
  var current_frame = this.frames[frameNumber - 1];

 return  ( ( this.gameRolls.length - current_frame.rollIndex < 3 ) &&
     ( current_frame.isStrike() || current_frame.isSpare() ) ) 
}

Game.prototype.bonusArray = function ( frameNumber ) {
  return this.frames.slice(0, frameNumber).filter( function( frame ) {
    if( frame.bonus() ) {
      return frame.bonus()
    }
  }).map( function( frame ) {
    return frame.bonus();
  }).reduce( function( a, b ) { return a.concat( b ); }, [] );

}

Game.prototype.bonus = function( frameNumber ) {
  var rolls = this.gameRolls;
  var bonus = 0;
  
  this.bonusArray( frameNumber ).forEach( function( i ) {
    bonus += rolls[ i ];
  });

  return bonus;
}

Game.prototype.rollsTotal = function( frameNumber ) {
  var rolls = this.rollsTillFrame( frameNumber );
  var slicedRoll = this.gameRolls.slice( 0, rolls );

  return slicedRoll.reduce(function( a, b ) {
    return a + b;
  });
}

Game.prototype.rollsTillFrame = function( frameNumber ) {
  var i,
      rolls = 0;

  for(i = 0; i < frameNumber; i++ ) {
    rolls += this.frames[i].turns; 
  }

  return rolls;
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

