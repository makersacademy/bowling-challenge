function Frame() {
  this._frameRolls = [];
  this._frameScore = 0
}

Frame.prototype.getFrameData = function() {
  return {rolls: this._frameRolls, total: this._frameScore}
}

Frame.prototype.addRoll = function(roll) {
  this._frameRolls.push(roll);
  if (this.isComplete()) {
    this._calculateTotal();
  }
}

Frame.prototype.isComplete = function() {
  return this._frameRolls.length === 2;
}

Frame.prototype._calculateTotal = function() {
  this._frameScore = this._frameRolls[0] + this._frameRolls[1];
}
