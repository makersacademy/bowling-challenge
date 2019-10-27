
var ScoreCalculator = function() {
  this.currentScore = 0
  this.frameScores = [0,0,0,0,0,0,0,0,0,0]
  this.bonusTurns = []
};

ScoreCalculator.prototype.calculateScore = function(scoreCard) {
  let framePerTurn = []
  let pinsPerTurn = []
  let rollPerTurn = []
  scoreCard.forEach(function(turn) {
    framePerTurn.push(turn.frame);
    rollPerTurn.push(turn.roll);
    pinsPerTurn.push(turn.pins);
  });
  this.calculateNormalScore(framePerTurn, pinsPerTurn.slice());
  this.isbonusTurn(pinsPerTurn.slice(), rollPerTurn);
  this.calculateBonusScore(pinsPerTurn, framePerTurn);
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

ScoreCalculator.prototype.isbonusTurn = function(pinsPerTurn, rollPerTurn) {
  let firstRoll = 0
  let secondRoll = 0
  let thirdRoll = 0
  let bonusTurns = this.bonusTurns

  rollPerTurn.forEach(function(rollTurn) {
     if ( rollTurn === 1 ) {
      firstRoll = ( pinsPerTurn.shift() );
      if ( firstRoll === 10 ) {
        bonusTurns.push( "Strike" );
      } else {bonusTurns.push( "normal" );}
    }
    else if ( rollTurn === 2 ) {
      secondRoll = ( pinsPerTurn.shift() );
      if ( firstRoll + secondRoll === 10 ) {
        bonusTurns.push( "Split" );
      } else if ( secondRoll === 10 ) {
        bonusTurns.push( "Strike" );
      } else {bonusTurns.push( "normal" );}
    }
    else if ( rollTurn === 3 ){
      thirdRoll = ( pinsPerTurn.shift() );
      if ( thirdRoll === 10 ) {
        bonusTurns.push( "Strike" );
      } else {bonusTurns.push( "normal" );}
    }
  });
};

ScoreCalculator.prototype.calculateBonusScore = function(pinsPerTurn, framePerTurn) {
  console.log(this.frameScores);
  console.log(this.bonusTurns);
  console.log(pinsPerTurn);
  console.log(framePerTurn);
};
