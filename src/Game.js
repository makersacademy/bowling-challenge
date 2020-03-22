

function Game(){
  this.rolls = [];
  this.currentBall = 0;
}

Game.prototype.currentScore = function (){
  var score = 0;
  var i = 0
  for (var frame = 0; frame < 10; frame++) {
    if (this.rolls[i] + this.rolls[i+1] === 10) {
      score += 10 + this.rolls[i+2];
      i += 2;
    } else {
      score += this.rolls[i] + this.rolls[i+1];
      i += 2;
    }
  }
  return score;
};

Game.prototype.roll = function(pins){
  this.rolls[this.currentBall++] = pins;
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