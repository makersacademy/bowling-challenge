function Frame() {
  this._rolls = [];
}

Frame.prototype = {
  addRoll: function(roll) {
    if (this._rolls.length < 2) {
      this._rolls.push(roll);
    } else {
      throw new Error('Already rolled twice!')
    };
  },
  score: function() {
    return this._rolls.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  },
  isASpare: function() {
    if (this.score() === 10) {
      return true;
    } else {
      return false;
    };
  }
}
