"use strict";

function ScoreCalculator() {
  this._frameScores = [];
};

ScoreCalculator.prototype.score = function(frameArray) {
  this._frameScores = Array(10).fill(0); // reset array every time we calc scores
  this._calculateScores(frameArray, 0);
  return { total: this._calculateTotal(), frameScores: this._frameScores }
};

ScoreCalculator.prototype._calculateScores = function(frameArray, index) {
  if (index >= 10) return; // exit condition from recursive function
  var frameScore = 0;
  if (frameArray[index] !== undefined) { // for when we calculate score before game is complete
    frameScore = frameArray[index].score() + addBonus(frameArray[index], frameArray[index+1], frameArray[index+2], index);
  };
  console.log("Index = " + index);
  console.log("Framescore = " + frameScore);
  this._frameScores[index] += frameScore;
  this._calculateScores(frameArray, index+1);
  console.log(this._frameScores);
};

ScoreCalculator.prototype._calculateTotal = function() {
  var total = 0;
  this._frameScores.forEach(function(score) {
    total += score;
  })
  return total;
};

function addBonus(frame, framePlusOne, framePlusTwo, index) {
  var bonusScore = 0;
  if (frame.bonus() === null) {
    bonusScore = 0;
  } else if (frame.bonus() === "strike") {
    if (framePlusOne !== undefined) {
      if (index === 8) {
        console.log("scoreForTenth")
        console.log(framePlusOne.bonusForTenth())
        bonusScore = framePlusOne.bonusForTenth();
      } else {
        bonusScore = framePlusOne.scoreForBonus() + addBonus(framePlusOne, framePlusTwo);
      }
    }
  } else if (frame.bonus() === "spare") {
    if (framePlusOne !== undefined) {
      bonusScore = framePlusOne.roll[0]
    }
  };
  console.log("Index = " + index);
  console.log("Bonus = " + bonusScore)
  return bonusScore;
};
