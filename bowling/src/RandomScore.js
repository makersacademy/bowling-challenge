function RandomScore() {};

RandomScore.prototype.createScore = function() {
  return Math.floor((Math.random() * 11));
};
