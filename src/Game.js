

function Game(){
  this._rolls = [];
  this.score = 0;
  this.ball = 0;
}

Game.prototype.currentScore = function (){
  return this.score;
}

Game.prototype.roll = function(pins){
  this.score += pins;
};



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