function Frame() {
  this._rolls = [];
}

Frame.prototype = {
  addRoll: function(roll) {
    this._rolls.push(roll);
  }
}
