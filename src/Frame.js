function Frame() {
  this.outcome;
  this.firstroll = null
  this.secondroll = null
  this.thirdRoll = null
  this.completeStatus = false
}

Frame.prototype.outcome = function () {
  return this.outcome;
};

Frame.prototype.saveRoll = function (numberOfPins) {
  if (this.firstroll) {
    this.secondroll = numberOfPins;
  } else {
    this.firstroll = numberOfPins;
  }
};

Frame.prototype.isComplete = function () {
  if (this.isAStrike()) {
    return true
  }
  if (this.firstroll && this.secondroll) {
    return true;
  } else { return false
 }
};

Frame.prototype.isAStrike = function () {
  if (this.firstroll === 10) {
    return true
  } else { return false }
};

Frame.prototype.isASpare = function () {
  if (this.isAStrike()) {
    return false
  } else {
    if (10-this.firstroll-this.secondroll > 0) {
      return false
    }
  return true
}
};
