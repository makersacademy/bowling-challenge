

function Game(){
  this.rolls = [];
  this.currentBall = 0;
}

Game.prototype.currentScore = function (){
  var score = 0;
  var frameIndex = 0
  for (var frame = 0; frame < 10; frame++) {
    if (this._isSpare(frameIndex)) { 
      score += 10 + this.rolls[frameIndex+2];
      frameIndex += 2;
    } else {
      score += this.rolls[frameIndex] + this.rolls[frameIndex+1];
      frameIndex += 2;
    }
  }
  return score;
};

Game.prototype.roll = function(pins){
  this.rolls[this.currentBall++] = pins;
};

Game.prototype._isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex+1] === 10;
}



// Game.prototype.currentMove = function(pins) {
//   if ( this.isStrike() ) {
//     this.strikeScoring(pins);
//   } else if ( this.isSpare() ) {
//     this.spareScoring(pins);
//   } else {
//     this.addToScore(pins);
//     if ( this.isFirstRoll() ) {
//       this.incrementRoll();
//     } else {
//       this.resetFrame(pins);
//     }
//   }
// };