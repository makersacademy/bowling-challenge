function Bowling() {
  this.pins = 10
}

Bowling.prototype.roll = function(num) {
  if(this.pins - num < 0 || num > 10) {
    throw("You cannot knock over more pins than there are standing")
  } else {
  this.pins -= num;
  };
};
