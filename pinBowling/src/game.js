function Game (pin) {
  'use strict'
  this.pin = pin || new Pin ();
  this.frame = this.pin.frame;
}

Game.prototype.pinsHit = function (number) {
  this.pin.pinsHit(number);
};
