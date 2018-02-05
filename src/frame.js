function Frame(rolls = []) {

  this.rolls = rolls
  
};

Frame.prototype = {

  roll: function (pins) {
    this.rolls.push(pins)
  },

  score: function () {
    return (this.rolls[0] + this.rolls[1])
  }
}
