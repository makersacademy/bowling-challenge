function Game(){
  var roll1score;
  var roll2score;
  this.allFrames = [];
  this.currentScore = 0
};

Game.prototype.roll1 = function() {
  roll1score = Math.floor((Math.random() * 10) + 1);
  return roll1score;
};

Game.prototype.roll2 = function() {
  roll2score = Math.floor((Math.random() * (10 - roll1score)));
  return roll2score;
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
