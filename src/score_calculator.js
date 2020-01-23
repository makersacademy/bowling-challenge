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
  let frameX = 1
  let frameScores = this.frameScores;
  this.framePerTurn.forEach(function(turn) {
    if ( turn === frameX ) {
      frameScores[ frameX - 1 ] += ( pinsPerTurn.shift() );
    } else {
      frameX ++
      frameScores[ frameX - 1 ] += ( pinsPerTurn.shift() );
    }
  });
};

ScoreCalculator.prototype.isbonusTurn = function(pinsPerTurn) {
  var bonusTurns = this.bonusTurns
  var roll = 0
  var secondRoll = 0

  this.rollPerTurn.forEach(function(rollTurn) {
    this.recordStrike = function() { bonusTurns.push( "Strike" )};
    this.recordSplit = function() { bonusTurns.push( "Split" )};
    this.recordNormal = function() { bonusTurns.push( "normal" )};

    if ( rollTurn === 1 || rollTurn === 3 ) {
      roll = ( pinsPerTurn.shift() );
      if ( roll === 10 ) { recordStrike() }
      else { recordNormal() }
    }
    else if ( rollTurn === 2 ) {
      secondRoll = ( pinsPerTurn.shift() );
      if ( roll + secondRoll === 10 ) { recordSplit() }
      else if ( secondRoll === 10 ) { recordStrike() }
      else { recordNormal() }
    }
  });
};

ScoreCalculator.prototype.calculateBonusScore = function() {
  let index = 0
  let pins = this.pinsPerTurn
  let frameScores = this.frameScores;
  let framePerTurn = this.framePerTurn;

  this.bonusTurns.forEach(function(bonus) {
    currentFrame = (framePerTurn[index]);
    frameScore = frameScores[currentFrame-1];
    if( currentFrame < 10 ) {
      if ( bonus === "Strike" ) {
        nextRoll1 = pins.slice(index +1, index +2)[0];
        nextRoll2 = pins.slice(index +2, index +3)[0];
        if (nextRoll1) {frameScore += nextRoll1 }
        if (nextRoll2) {frameScore += nextRoll2 }
      }
      else if ( bonus === "Split" ) {
        nextRoll = pins.slice(index +1, index +2)[0];
        if (nextRoll) {frameScore += nextRoll}
      }
      frameScores[currentFrame-1] = frameScore
      index ++
    };
    this.frameScores = frameScores;
  });
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
