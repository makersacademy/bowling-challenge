var Scorecard = function () {
  this.rolls = []

}

Scorecard.prototype = {
  add_roll: function (number) {
    this.rolls.push(number)
    if (number === 10) {
      this.rolls.push(null)
    }
  }
}