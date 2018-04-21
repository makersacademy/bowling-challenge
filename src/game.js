"use strict";

function Game(){
  for (var i = 0, a = new Array(21); i < 21;){
    a[i++] = 0;
  }
  this.rolls = a;
  this.currentRoll = 0;
}

Game.prototype.roll = function(pins){
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function(){
  var score = 0;
  var i = 0;
  for(var frame = 0; frame < 10; frame++){
    if(this.rolls[i] + this.rolls[i+1] === 10){
      score += 10 + this.rolls[i+2];
      i += 2
    } else {
      score += this.rolls[i] + this.rolls[i+1];
      i += 2;
    }
  }
  return score;
};

var game = new Game();
console.log(game.roll(20));



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