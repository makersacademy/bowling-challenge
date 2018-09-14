"use strict";

function BowlingModel() {
  this.scoreCalculator = new ScoreCalculator();
  this.turnIncrementer = new TurnIncrementer();
  this._currentFrame;
  this._frameArray = [];
};

BowlingModel.prototype.play = function(pins) {
  if (this.turnIncrementer.isNewFrame(pins)) {
    var frame = new Frame();
    frame.addPins(pins);
    this._frameArray.push(frame)
    this._currentFrame = frame;
  } else {
    this._currentFrame.addPins(pins);
  }
  console.log(this._frameArray)
  console.log(this._currentFrame)
};

BowlingModel.prototype.score = function() {
  return this.scoreCalculator.score(this._frameArray)
};
