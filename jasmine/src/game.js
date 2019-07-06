
// set up a constructor function Game, give it a saved property - empty array
function Game() {
  this.roll = []
};

// add a function via prototype for all objects created by the constructor function
// function = input(roll) takes a roll and adds to this.roll
Game.prototype.input_roll = function (roll) {
  this.roll.push(roll)
  return this.roll
};
