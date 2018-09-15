"use strict";

function BowlingModel() {
  this.scoreCalculator = new ScoreCalculator();
  this.turnIncrementer = new TurnIncrementer();
  this._currentFrame;
  this._frameArray = [];
};

BowlingModel.prototype.play = function(pins) {
  if (this.turnIncrementer.isNewFrame(pins)) {
    console.log("I returned true") // note: note giving new frame after strike
    if (this._frameArray.length < 9) {
      var frame = new Frame(false);
    } else if (this._frameArray.length <= 10) {
      var frame = new Frame(true);
    }
    frame.addPins(pins);
    this._frameArray.push(frame)
    console.log(this._frameArray)
    this._currentFrame = frame;
  } else {
    this._currentFrame.addPins(pins);
  }
};

BowlingModel.prototype.score = function() {
  return this.scoreCalculator.score(this._frameArray)
};

BowlingModel.prototype.currentTurn = function() {
  return this.turnIncrementer.turn;
}
