
var ScoreCalculator = function() {
  this.currentScore = 0
  this.frameScores = [0,0,0,0,0,0,0,0,0,0]
};

ScoreCalculator.prototype.calculate = function(scoreCard) {
  let framePerTurn = []
  let pinsPerTurn = []
  scoreCard.forEach(function(turn) {
    framePerTurn.push(turn.frame);
    pinsPerTurn.push(turn.pins);
  });
  console.log(framePerTurn);
  console.log(pinsPerTurn);
  let x = pinsPerTurn.slice();
  this.calculateNormalScore(framePerTurn, pinsPerTurn);
  console.log(this.frameScores);
  console.log(x);
  // this.calculateBonusScore(framePerTurn, x);
};

ScoreCalculator.prototype.calculateNormalScore = function(framePerTurn, pinsPerTurn) {
  let frameX = 1
  let frameScores = this.frameScores;
  framePerTurn.forEach(function(turn) {
    if ( turn === frameX ) {
      frameScores[ frameX - 1 ] += ( pinsPerTurn.shift() );
    } else {
      frameX ++
      frameScores[ frameX - 1 ] += ( pinsPerTurn.shift() );
    }
  });
};
