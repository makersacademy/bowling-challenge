function Score() {

};

Score.prototype.calcScore = function() {
  var total = 0;
  for(var i = 0; i< game.showGamesFrames().length; i++) {
    var arr = game.showGamesFrames()[i]
    total += arr.reduce((a, b) => a+b, 0);
  }
  return total;
}
