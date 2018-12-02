// function Game() {
//   this._frames = [];
//   this._score = 0;
//   this._currentFrame = [];
// }
//
// Game.prototype.frames = function() {
//   return this._frames;
// };
//
// Game.prototype.roll = function(pins) {
//   if (this._isASpare(pins)) {
//     this._spareBonusScore(pins)
//   } else if (this._firstBowl == undefined) {
//     this._regularScore(pins);
//   } else {
//     this._resetCurrentFrame(pins);
//   }
// };
//
// Game.prototype.score = function() {
//   this._calculateScore();
//   return this._score;
// };
//
// Game.prototype._calculateScore = function() {
//   this._score = this._frames.reduce( function(frame, score){
//     return frame + score;
//   });
// }
//
// Game.prototype._isASpare = function(pins) {
//   if (pins + this._firstBowl() == 10) return true;
// };
//
// Game.prototype._firstBowl = function() {
//   return this._currentFrame[0];
// }
//
// Game.prototype._secondBowl = function() {
//   return this._currentFrame[1];
// }
//
// // Game.prototype._spareBonusScore = function(pins) {
// //   frameScore = this._firstBowl + this._secondBowl + this._nextFrame[0];
// // };
//
// Game.prototype._regularScore(pins) {
//   this._currentFrame.push(pins);
// }
//
// Game.prototype._resetCurrentFrame(pins) = function {
//   this._currentFrame.push(pins);
//   this._frames.push(this._currentFrame);
//   thie._currentFrame = [];
// }
