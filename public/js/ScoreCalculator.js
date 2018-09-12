"use strict";

function ScoreCalculator() {
  this._frameScores = Array(10).fill(0);
};

ScoreCalculator.prototype.score = function(frameArray) {
  var response = this._calculateScores(frameArray, 0);
  var total = this._calculateTotal()
  return { total: total, frameScores: this._frameScores }
};

ScoreCalculator.prototype._calculateScores = function(frameArray, index) {
  if (index >= 10) return; // exit condition from recursive function
  var frameScore = 0;
  if (frameArray[index] !== undefined) { // for when we calculate score before game is complete
    frameScore = frameArray[index].score() + addBonus(frameArray[index], frameArray[index+1], frameArray[index+2]);
  };
  this._frameScores[index] += frameScore;
  this._calculateScores(frameArray, index+1);
};

ScoreCalculator.prototype._calculateTotal = function() {
  var total = 0;
  this._frameScores.forEach(function(score) {
    total += score;
  })
  return total;
};

function addBonus(frame, framePlusOne, framePlusTwo) {
  var frameScore = 0;
  if (frame.bonus() === null) {
    frameScore = 0;
  } else if (frame.bonus() === "strike") {
    if (framePlusOne !== undefined) {
      frameScore = framePlusOne.score() + addBonus(framePlusOne, framePlusTwo)
    }
  } else if (frame.bonus() === "spare") {
    frameScore = framePlusOne.roll[0]
  };
  return frameScore;
};
