function Scorecard() {
  this._frameScore = [];
  this._frame = 1;
  this._gameScore = [[]]
}

Scorecard.prototype.showScore = function() {
  return this.sumFrameScore();
}

Scorecard.prototype.enterScore = function(pins) {
  if (this.sumFrameScore() + pins > 10) throw "maximum input per frame is 10";
  this._frameScore.push(pins);
  if (this._gameScore[this._frame -1].includes(10)) {
    this._gameScore[this._frame -1].push(pins);
  }
  if ((this._frameScore.length === 2) || (pins === 10)) {
    this.frameReset();
  }
}

Scorecard.prototype.isFrame = function() {
  return this._frame;
}

Scorecard.prototype.frameReset = function() {
  this._gameScore.push(this._frameScore)
  this._frame += 1;
  this._frameScore = [];
}

Scorecard.prototype.sumFrameScore = function(frameNumber = this._frame) {
  if (frameNumber === this._frame) {
  return this._frameScore.reduce((a,b) => a + b, 0);
  } else {
  return this._gameScore[frameNumber].flat().reduce((a,b) => a + b, 0);
  }
}

Scorecard.prototype.totalScore = function() {
  return this._gameScore.flat().flat().reduce((a,b) => a + b, 0);
}
