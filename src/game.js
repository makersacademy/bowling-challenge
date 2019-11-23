function Game (){
  this.rolls = [ ]
};

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function () {
  var score = 0
  var frameIndex = 0;
  for (var frame = 0; frame < 10; frame ++)
  };

  Game.prototype.isSpare = function (frameIndex) {
      return this.rolls[frameIndex] + this.roll[frameIndex + 1 ] == 10
  };
};
