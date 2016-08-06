Game = function(){
  this.round = 1;
  this.throw = 1;
};

Game.prototype.roundNumber = function () {
  return this.round;
};

Game.prototype.throwNumber = function (arguments) {
  return this.throw;
};
