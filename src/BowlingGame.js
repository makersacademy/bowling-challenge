var BowlingGame = function(){
  this.frameRolls = [];
};

BowlingGame.prototype.roll = function (pins) {
  this.frameRolls.push(pins);
};

BowlingGame.prototype.score = function () {
  var result = 0;
  for(var i = 0; i < 20; i++) {
    result += this.frameRolls[i];
  }
  return result;
};
