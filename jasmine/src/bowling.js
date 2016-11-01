function Game(){
};

  Game.prototype.roll1 = function(){
      pin = new Pins();
      return pin.knockedDownPins();
  };
