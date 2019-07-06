
// set up a constructor function Game, give it a saved property - empty array
function Game() {
  this.roll = []
};

// add a function via prototype for all objects created by the constructor function
// function = input(roll) takes a roll and adds to this.roll
Game.prototype.input_roll = function (roll) {
  if(roll <= 10 && roll >= 0){
    this.roll.push(roll)
    return this.roll
  } else {
    return "Invalid number"
  }
};

Game.prototype.which_roll = function() {
  if(this.roll.length % 2 == 0) {
    return 2
  } else {
    return 1
  }
};
