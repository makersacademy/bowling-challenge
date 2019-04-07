function ScoreCard() {
  this.scores = [];
  this.pinsRolled = [];
};

ScoreCard.prototype.pinRoll = function(playerRoll) {
  this.pinsRolled.push(playerRoll);
};

