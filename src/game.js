"use strict";

function Game() {
}

Game.prototype.roll = function(){
};

Game.prototype.score = function(){
  return 0;
};




// function Game(){
//   this._frames = [];
// }

// Games.prototype.addFrame = function(frame){
//   this._frames.push(frame);
// }

// game = new Game();
// game.addFrame(new Frame());



// Game.prototype.strikeBonus = function(index) {
//   var bonus = this.frames[index+1].total;
//   var frames = this.frames;
//   if (this.isAStrike(index+1)) {
//     bonus = isAStrike(index+2) ? 20 : 10 + this.frames[index+2].firstBowl;
//   }
//   return bonus;
// }

// Game.prototype.isAStrike(index){
//   return this.frames[index+1].outcome === 'X';
// }


// BowlingGame.prototype.currentMove = function(pins) {
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