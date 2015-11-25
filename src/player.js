(function () {
   'use strict';
}());

function Player(frame){
  this.frame = frame || new Frame();

}

Player.prototype.roll = function(number){
  var randomNumber = _randomNumberGenerator(number);
  this.frame.setKnockedDownPins(randomNumber);
};

//below is a 'closure' - like a Ruby proc. It is a function assigned to
//a variable that can be called at will (just attach () to the var name(?))
// undercore at beginning means private method.

var _randomNumberGenerator = function(number){
  return Math.floor(Math.random() * (number + 1));
};
