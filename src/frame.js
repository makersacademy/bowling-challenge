function Frame(bonusKlass){
  var DEFAULT_PINS = 10;
  this.bonusKlass = bonusKlass || Bonus;
  this.standingPins = DEFAULT_PINS;
  this.scoreCard = [];
  this.isComplete = false;
  this.isFinalised = false;
  this.bonus = null;
}

Frame.prototype.bowl = function(numberOfPins) {
  if (this.isComplete) {
    throw new Error("You already finished this frame");
  }
  if (this._isValidScore(numberOfPins)) {
    this._addToFrameScore(numberOfPins);
    this._completeSelf();
  } else {
    throw new Error("Cannot score that number of pins!");
  }
}

Frame.prototype.getScoreCard = function() {
  return this.scoreCard;
}

Frame.prototype.getScore = function() {
  if(this.isFinalised) {
    var directScore = this.scoreCard.reduce(function(a, b) { return a + b; },0);
    return directScore + this._getBonusScore();
  } else {
    return null;
  }
}

Frame.prototype.setBonus = function() {
  if (this.standingPins > 0) {
    this.isFinalised = true;
  } else if (this.scoreCard.length === 1) {
    this.bonus = new this.bonusKlass("strike");
  } else {
    this.bonus = new this.bonusKlass("spare");
  }
};

Frame.prototype.addToBonus = function(num) {
  this.bonus.addPoints(num);
  if(this.bonus.isComplete) {
    this.isFinalised = true;
  }
}

Frame.prototype._isValidScore = function(numberOfPins) {
  return (numberOfPins <= this.standingPins) && (numberOfPins >= 0);
}

Frame.prototype._addToFrameScore = function(numberOfPins) {
  this.standingPins -= numberOfPins;
  this.scoreCard.push(numberOfPins);
}

Frame.prototype._completeSelf = function() {
  if (this.standingPins === 0 || this.scoreCard.length === 2) {
    this.isComplete = true;
    this.setBonus();
  }
  if (this.bonus && this.bonus.isComplete === true) {
    this.isFinalised = true;
  }
}

Frame.prototype._getBonusScore = function () {
  if(this.bonus) {
    return this.bonus.score;
  } else {
    return 0;
  }
};
