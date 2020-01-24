// Accepts 'BowlingCard.scoreCard' input & uses it to Calculate a players score.
var ScoreCalculator = function() {
  this.score = 0
  this.frameScores = [0,0,0,0,0,0,0,0,0,0]
  this.bonusTurns = []
  this.framePerTurn = []
  this.pinsPerTurn = []
  this.rollPerTurn = []
};

ScoreCalculator.prototype.calculateScore = function(scoreCard) {
  this.arrange(scoreCard);
  this.calculateNormalScore(this.pinsPerTurn.slice());
  this.isbonusTurn(this.pinsPerTurn.slice());
  this.calculateBonusScore();
  this.totalScore();
};

ScoreCalculator.prototype.arrange = function(scoreCard) {
  let framePerTurn = this.framePerTurn
  let pinsPerTurn = this.pinsPerTurn
  let rollPerTurn = this.rollPerTurn
  scoreCard.forEach(function(turn) {
    framePerTurn.push(turn.frame);
    rollPerTurn.push(turn.roll);
    pinsPerTurn.push(turn.pins);
  });
};

ScoreCalculator.prototype.calculateNormalScore = function(pinsPerTurn) {
  var frameScores = this.frameScores;
  var frameNum = 1
  this.framePerTurn.forEach(function(frameTurn) {
    if ( frameTurn !== frameNum ) { frameNum ++ }
    frameScores[ frameNum - 1 ] += ( pinsPerTurn.shift() );
  });
};

ScoreCalculator.prototype.isbonusTurn = function(pinsPerTurn) {
  var bonusTurns = this.bonusTurns
  var roll
  var secondRoll
  this.rollPerTurn.forEach(function(rollTurn) {
    if ( rollTurn === 1 || rollTurn === 3 ) {
      roll = ( pinsPerTurn.shift() )
      secondRoll = 0
    } else {
      secondRoll = ( pinsPerTurn.shift() )
    }

    if ( roll === 10 || secondRoll === 10 ) {
      bonus = "Strike"
    } else if ( roll + secondRoll === 10 ) {
      bonus = "Split"
    } else {
      bonus = "normal"
    }
    bonusTurns.push(bonus)
  })
};

ScoreCalculator.prototype.calculateBonusScore = function() {
  var pins = this.pinsPerTurn
  var frameScores = this.frameScores;
  var framePerTurn = this.framePerTurn;

  this.bonusTurns.forEach(function(bonus, index) {
    frame = (framePerTurn[index]);
    if ( frame === 10 ) { return }
    nextRoll1 = pins.slice(index +1, index +2)[0];
    nextRoll2 = pins.slice(index +2, index +3)[0];
    if ( bonus === "Strike" ) {
      if (nextRoll1) { frameScores[frame-1] += nextRoll1 }
      if (nextRoll2) { frameScores[frame-1] += nextRoll2 }
    } else if ( bonus === "Split" ) {
      if (nextRoll1) { frameScores[frame-1] += nextRoll1 }
    }
  })
};

ScoreCalculator.prototype.totalScore = function() {
this.score = this.frameScores.reduce((a, b) => a + b, 0);
};

ScoreCalculator.prototype.reset = function() {
  this.score = 0
  this.frameScores = [0,0,0,0,0,0,0,0,0,0]
  this.bonusTurns = []
  this.framePerTurn = []
  this.pinsPerTurn = []
  this.rollPerTurn = []
};
