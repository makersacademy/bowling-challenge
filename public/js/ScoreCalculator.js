"use strict";
// receive array of frames
function ScoreCalculator() {
  this._frameScores = Array(10).fill(0);
};

ScoreCalculator.prototype.score = function(frameArray) {
  this._calculateFrameTotal(frameArray);
  var total = this._calculateTotal()
  return { total: total, frameScores: this._frameScores }
};

ScoreCalculator.prototype._calculateFrameTotal = function(frameArray) {
  var _this = this;
  frameArray.forEach(function(frame, index) {
    var frameScore = 0;
    if (frame.bonus() === null) {
      frameScore = frame.score()
    } else if (frame.bonus() === "strike") {
      frameScore = frame.score() + add_frame_plus_one_score(index + 1)
    } else if (frame.bonus() === "spare") {
      frameScore = frame.score() + add_frame_plus_one_roll_one_score(index + 1)
    }
  _this._frameScores[index] += frameScore;
  });
}

ScoreCalculator.prototype._calculateTotal = function() {
  var total = 0;
  this._frameScores.forEach(function(score) {
    total += score;
  })
  return total;
};
