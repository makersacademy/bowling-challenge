function ScoreLogic() {
};

ScoreLogic.prototype.isNoMoreThanTen = function(a, b) {
  return ( a + b <= 10);
}

ScoreLogic.prototype.isAStrike = function(a, b) {
  return (a === 10);
}

ScoreLogic.prototype.isASpare = function(a, b) {
  return ( a + b === 10);
}
