
 function Game() {
  this.rollAccumulator = [0]
}
 Game.prototype.getCurrentScore = function () {
  var total = this.rollAccumulator.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  });
  return total;
}
  Game.prototype.roll = function (roll) {
    this.rollAccumulator.push(roll);
  }
