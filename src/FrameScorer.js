'use strict';

function FrameScorer() {
  this.totalPinsPerBowlArray = [];
  this.frameTotals = [];
  this.firstBowlScore = 0;
  this.secondBowlScore = 0;
};

//
FrameScorer.prototype.inputBowls = function(firstBowl, secondBowl) {
  this.updateFirstBowlScore(firstBowl)
  this.updateSecondBowlScore(secondBowl)
  this.updatetotalPinsPerBowlArray(firstBowl, secondBowl)
};

// FrameScorer.prototype.updateFrameScoreFirstBowl = function(game, gameScorer) {
//   if(game.isSecondStrikeTrue()) {
//     var runningTotal = gameScorer.total;
//     this.frameTotals.push(runningTotal);
//     console.log("second strike true");
//     console.log(gameScorer.total);
//   }
//   if(game.isSpareTrue()) {
//     var runningTotal = (gameScorer.total - this.firstBowlScore);
//     this.frameTotals.push(runningTotal);
//     console.log("spare true")
//     console.log(gameScorer.total);
//   } else if(this.totalPinsPerBowlArray.length === 21) {
//     var runningTotal = gameScorer.total;
//     this.frameTotals.push(runningTotal);
//     console.log("array length");
//     console.log(gameScorer.total);
//   }  else {
//     console.log("test");
//     console.log(gameScorer.total);
//   }
//   };
//
// FrameScorer.prototype.updateFrameScoreSecondBowl = function(game, gameScorer) {
//   if(!game.isStrikeTrue() && !game.isSpareTrue()) {
//     var runningTotal = gameScorer.total;
//     this.frameTotals.push(runningTotal);
//     console.log("strike and spare not true ");
//     console.log(gameScorer.total);
//   } else if(this.totalPinsPerBowlArray.length === 20 && game.isStrikeTrue() === true) {
//     var runningTotal = gameScorer.total;
//     this.frameTotals.push(runningTotal);
//     console.log("array length");
//     console.log(gameScorer.total);
//   } else {
//     console.log("test");
//     console.log(gameScorer.total);
//
//   }
// };


FrameScorer.prototype.updateFirstBowlScore = function(amount) {
  this.firstBowlScore = amount;
};

FrameScorer.prototype.updateSecondBowlScore = function(amount) {
  this.secondBowlScore = amount;
};

FrameScorer.prototype.updatetotalPinsPerBowlArray = function(firstBowl, secondBowl) {
    this.totalPinsPerBowlArray.push(firstBowl, secondBowl)
};
