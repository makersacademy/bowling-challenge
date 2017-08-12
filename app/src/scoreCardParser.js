function ScoreCardParser() {

};

ScoreCardParser.prototype.parse = function(scoreCard) {
  var output = [];
  scoreCard.forEach(function(item) {
    var round;
    if(item.results.length === 0) {
      round = [0];
    } else { round = item.results; }
    output.push(round);
  });
  return output;
}
