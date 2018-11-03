function Game() {
  this.rollsArray = [];
}

Game.prototype.addNewRoll = function(rollToBeAdded) {
  this.rollsArray.push(rollToBeAdded);
};

Game.prototype.getCurrentScore = function() {
  var total = this.rollsArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  return total;
}
