function Scorecard() {
  this._score = [];
  this._frame = 0;
}

Scorecard.prototype.showScore = function() {
  return this._score.reduce((a,b) => a + b, 0);
}

Scorecard.prototype.enterScore = function(pins) {
  if (this._score.reduce((a,b) => a + b, 0) + pins > 10) throw "maximum input per frame is 10";
  this._score.push(pins);
  if ((this._score.length === 2) || (pins === 10)) {
    this.frameReset();
  }
}

Scorecard.prototype.isFrame = function() {
  return this._frame + 1;
}

Scorecard.prototype.frameReset = function() {
  this._frame += 1;
  this._score = [];
}
