function Frame(bonusKlass){
  var DEFAULT_PINS = 10;
  this.bonusKlass = bonusKlass || Bonus;
  this.standingPins = DEFAULT_PINS;
  this.scoreCard = [];
  this.isComplete = false;
  this.bonus = new this.bonusKlass();
}

Frame.prototype.bowl = function(numberOfPins) {
  if (this.isComplete) {
    throw new Error("You already finished this frame");
  }
  if (this._isValidScore(numberOfPins)) {
    this._addToFrameScore(numberOfPins);
  } else {
    throw new Error("Cannot score that number of pins!");
  }
}

Frame.prototype.getScoreCard = function() {
  return this.scoreCard;
}

Frame.prototype.getScore = function() {
  var directScore = sumtotal(this.scoreCard);
  if(this.bonus === null) {
    return directScore;
  } else if (this.bonus) {
    var bonusScore = this._setBonusScore();
    return directScore + bonusScore;
  }
}

Frame.prototype._setBonusScore = function() {
  var bonusScore
  if (this.bonus === null) {
    bonusScore = 0;
  } else {
    bonusScore = this.bonus.getTotal();
  }
  return bonusScore;
}

Frame.prototype.triggerBonus = function(bonusKlass) {
  this.bonus = new bonusKlass(2);
};

Frame.prototype._isValidScore = function(numberOfPins) {
  return (numberOfPins <= this.standingPins) && (numberOfPins >= 0);
}

Frame.prototype._addToFrameScore = function(numberOfPins) {
  this.standingPins -= numberOfPins;
  this.scoreCard.push(numberOfPins);
  if (this.standingPins === 0 || this.scoreCard.length === 2) {
    this.isComplete = true;
  }
}

function sumtotal(scoreArray) {
  return scoreArray.reduce(function(a, b) { return a + b; }, 0);
}
