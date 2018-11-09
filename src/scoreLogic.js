function ScoreLogic() {
};

ScoreLogic.prototype.isNoMoreThanTen = function(a, b) {
  return ( a + b <= 10);
}

ScoreLogic.prototype.isAStrike = function(a) {
  return (a === 10);
}
