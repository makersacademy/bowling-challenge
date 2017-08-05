function Bonus(type, frameNumber) {
  this._type = type;
  this._frameNumber = frameNumber;
}

Bonus.prototype.type = function () {
  return this._type;
};

Bonus.prototype.getFrameNumber = function() {
  return this._frameNumber;
};

// Bonus.prototype.calculate = function(frame) {
//   if (this.type() == "strike") {
//     this._score = frame.getScore();
//   } else if (this.type() == "spare") {
//     this._score = frame.getFirstRoll();
//   }
// };
//
// Bonus.prototype.getScore = function () {
//   return this._score;
// };
