
var ScoreCalculator = function() {
  this.currentScore = 0
  this.frameScores = [0,0,0,0,0,0,0,0,0,0]
};

ScoreCalculator.prototype.calculate = function(scoreCard) {
  let framePerTurn = []
  let pinsPerTurn = []
  let rollPerTurn = []
  scoreCard.forEach(function(turn) {
    framePerTurn.push(turn.frame);
    rollPerTurn.push(turn.roll);
    pinsPerTurn.push(turn.pins);
  });
  console.log(framePerTurn);
  console.log(pinsPerTurn);
  console.log(rollPerTurn);
  let pPTCopy = pinsPerTurn.slice();
  this.calculateNormalScore(framePerTurn, pinsPerTurn);
  console.log(this.frameScores);
  this.calculateBonusScore(framePerTurn, pPTCopy, rollPerTurn);
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

ScoreCalculator.prototype.calculateBonusScore = function(framePerTurn, pinsPerTurn, rollPerTurn) {
  let firstRoll = 0
  let secondRoll = 0
  let thirdRoll = 0
  console.log( rollPerTurn );
  rollPerTurn.forEach(function(rollTurn) {
     if ( rollTurn === 1 ) {
      firstRoll = ( pinsPerTurn.shift() );
      if ( firstRoll === 10 ) {
        console.log( "Strike" );
      }
    } else if ( rollTurn === 2 ) {
      secondRoll = ( pinsPerTurn.shift() );
      if ( firstRoll + secondRoll === 10 ) {
        console.log( "Split" );
      } else if ( secondRoll === 10 ) {
        console.log( "Strike" );
      }
    } else if ( rollTurn === 3 ){
      thirdRoll = ( pinsPerTurn.shift() );
      if ( thirdRoll === 10 ) {
        console.log( "Strike" );
      }
    }
  });
};








// var multiplier = 0
// if ( roll === 1 && pins === 10 ){


// ScoreCalculator.prototype.calculateBonus = function(pins) {
//   var roll1 = this.scoreCard[this.scoreCard.length - 2].pins
//   var roll2 = this.scoreCard[this.scoreCard.length - 1].pins
//   if (roll1 + roll2 === 10 ){
//     var multiplier = 2;
//     this.score += pins * multiplier;
//   } else {
//       this.score += pins;
//   }
// };
