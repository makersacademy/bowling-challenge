function Game (pin) {
  this.pin = pin || new Pin ();
}

Game.prototype.pinsHit = function (number) {
  this.pin.pinsHit(number);
};
