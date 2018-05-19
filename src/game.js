const max_pins = 10;

function Game() {
  this.frame = []
}

Game.prototype.roll = function(pins) {
  if (pins > 10) {
    throw "There is max of 10 pins to knock";
  } else {
    this.frame.push(pins);
  }
};
