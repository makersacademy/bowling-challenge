function Frame() {
  this.totalScore = null;
  this.firstRoll = null;
  this.strike = false;
  this.spare = false;
};

Frame.prototype.receiveRoll = function(hits) {
  this._rollCountCheck(hits);
  if(this.firstRoll != null) {
    this.secondRoll = hits;
  } else if (hits == 10) {
    this.strike = true;
  } else {
    this.firstRoll = hits;
  };
  this._frameCountCheckAndScoreCalculate(this.firstRoll, this.secondRoll)
};

Frame.prototype._rollCountCheck = function(hits) {
  if(hits > 10) {
    throw "Can not hit more than ten pins";
  };
};

Frame.prototype._frameCountCheckAndScoreCalculate = function(firstRoll, secondRoll) {
  if((firstRoll + secondRoll) > 10) {
    throw "Can not hit more than ten pins";
  } else {
    this.totalScore = firstRoll + secondRoll;
  };
  if(this.totalScore == 10) {
    this.spare = true;
  };
};