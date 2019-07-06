
// set up a constructor function Game, give it a saved property - empty array
function Game(frame) {
  this.roll = []
  this.frame = frame
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

Game.prototype.current_roll = function() {
  if(this.roll.length % 2 == 0 || this.roll.length == 0) {
    return 1
  } else {
    return 2
  }
};
