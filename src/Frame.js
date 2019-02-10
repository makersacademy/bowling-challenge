'use strict';

function Frame() {
  var frameScore = [];
}

Frame.prototype.score = function() {
  return frameScore.reduce((a,b) => a + b, 0)
};


// Airport.prototype.clearForLanding = function(plane) {
//   if(this._weather.isStormy()) {
//     throw new Error('cannot land during storm');
//   }
//   this._hangar.push(plane);
// };
