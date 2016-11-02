function Game(){
  this.currentScore = 0
};

  Game.prototype.roll = function(){
      pin = new Pins();
      this.currentScore += pin.knockedDownPins();
      console.log(pin.knockedDownPins());
  };


  Game.prototype.isStrike = function () {

  };

  Game.prototype.isSpare = function () {

  };

  Game.prototype.strikeBonus = function () {

  };

  Game.prototype.spareBonus = function () {

  };

  Game.prototype.tenthFrame = function () {

  };
