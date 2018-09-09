function ScoreCard () {
  this._bowls = [];
  this._bowlIndex = 0;
}

ScoreCard.prototype.bowl = function (knockedPins) {
  this._bowls.push(knockedPins);
};
