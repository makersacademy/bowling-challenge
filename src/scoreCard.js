function ScoreCard( frames ) {
  this.frames = frames;
  //gameRolls
}

ScoreCard.prototype.score = function( frameNumber ) {
  frameNumber = frameNumber !== undefined ? frameNumber : this.frames.length;
  if(this.isNotReadyForScoring( frameNumber ) ) {
    return '';
  }

  return this.bonus( frameNumber ) + this.rollsTotal( frameNumber );
}

ScoreCard.prototype.rollsPlayed = function() {
  return this.frames.map( function( frame ) { return frame.turns; })
                    .reduce( function( a, b ) { return a + b; });
}

ScoreCard.prototype.isNotReadyForScoring = function( frameNumber ) {
  var current_frame = this.frames[frameNumber - 1];

  if( current_frame.isStrike() || current_frame.isSpare() ) {
    return this.rollsPlayed() - current_frame.rollIndex < 3;
  } else {
    return  !current_frame.isFinished();
  }
}

ScoreCard.prototype.bonusArray = function ( frameNumber ) {
  return this.frames.slice(0, frameNumber).filter( function( frame ) {
    if( frame.bonus() ) {
      return frame.bonus()
    }
  }).map( function( frame ) {
    return frame.bonus();
  }).reduce( function( a, b ) { return a.concat( b ); }, [] );

}

ScoreCard.prototype.bonus = function( frameNumber ) {
  var rolls = this.gameRolls;
  var bonus = 0;

  this.bonusArray( frameNumber ).forEach( function( i ) {
    bonus += rolls[ i ];
  });

  return bonus;
}

ScoreCard.prototype.rollsTillFrame = function( frameNumber ) {
  var currentFrame = this.frames[frameNumber - 1];
  return currentFrame.rollIndex + currentFrame.turns;
}

ScoreCard.prototype.rollsTotal = function( frameNumber ) {
  var rolls = this.rollsTillFrame( frameNumber );
  var slicedRoll = this.gameRolls.slice( 0, rolls );

  return slicedRoll.reduce(function( a, b ) {
    return a + b;
  });
}
