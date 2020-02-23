'use strict';

function Game () {
  this.frames = [];
  this.gameTotal = 0;
};

Game.prototype.addFrame = function(frame) {
  if (this.frames.length < 10) {
    this.frames.push(frame);  
  } else {
    return;
  };
};

// Game.prototype.finalScore = function() {
//   for (var i = 0; i < this.frames.length; i++) {
//     for (var j = 0; j < this.frames[i].length; j++) {
//       this.gameTotal += this.frames[i][j];   
//     }  
//   }
//   return this.gameTotal;
// };




