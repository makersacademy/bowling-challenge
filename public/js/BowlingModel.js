"use strict";

function BowlingModel() {
  this.scoreCalculator = new ScoreCalculator();
  this.turnIncrementer = new TurnIncrementer();
  this._frameArray = [];
};

BowlingModel.prototype.play = function(pins) {
  if (this.turnIncrementer.isNewFrame(pins)) {
    var frame = new Frame();
    frame.addPins(pins);
    this._frameArray.push(frame)
  } else {
    frame.addPins(pins);
  }
};

BowlingModel.prototype.score = function() {
  //result = this.scoreCalculator.score(this._frameArray)
  // result = { total: total, frameScores: this._frameScores }
  // return this.scoreCalculator.score(this._frameArray)
};
