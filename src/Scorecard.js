'use strict';

function Scorecard() {
  this.frames = [];
  // this.score = 0

}

// Scorecard.prototype.total = function(frames) {
//   console.log(this.score)
//   frames.forEach(function(element) {
//     console.log(this.score)
//     this.score = this.score + element.reduce((a,b) => a + b, 0)
//   });
//   return this.score
// };

Scorecard.prototype.total = function(frames) {
  var score = 0
  frames.forEach(function(element) {
    score = score + element.reduce((a,b) => a + b, 0)
  });
  return score
};

// Scorecard.prototype.turn = function(pins) {
//   var currentFrame = new Frame()
//   currentFrame
// };


// array.reduce((a,b) => a + b, 0)
