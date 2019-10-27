
var ScoreCalculator = function() {
  this.totalScore = 0
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
  let bonusTurns = this.bonusTurns
  let firstRoll = 0
  let secondRoll = 0
  let thirdRoll = 0

  this.rollPerTurn.forEach(function(rollTurn) {
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

ScoreCalculator.prototype.calculateBonusScore = function() {
  console.log(this.framePerTurn);
  console.log(this.rollPerTurn);
  console.log(this.pinsPerTurn);
  console.log(this.bonusTurns);
  console.log(this.frameScores);

  var pins = this.pinsPerTurn
  var count = 0
  nextTwoRollsList = []

  pins.forEach(function() {
    // console.log(pins.slice(count+1,count+3));
    nextTwoRollsList.push(pins.slice(count+1, count+3));
    count ++
  });

  console.log(nextTwoRollsList);

  nextTwoRollsList.forEach(function(nextTwo, index) {
    console.log(nextTwo);
    console.log( index );
  });
};
