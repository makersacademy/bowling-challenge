var Game = function(scoreCard) {
  this._scoreCard = scoreCard;
};

Game.prototype.start = function() {
  return true;
};

Game.prototype.seeRolls = function() {
  return this._scoreCard.seeRolls();
};
