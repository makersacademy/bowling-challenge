var Scorecard = function() {
  this.gameStorage = [];
  this.turnNumber = 1;
  this.currentTurnStorage = [];
  this.previousTurnStorage = [];
  this.twoTurnsAgoStorage = [];
  this.currentStageOfTurn = 1;
  this.numberOfTurns = 10
  this.numberOfPins = 10
  this.normalNumberOfRollsPerTurn = 2
  this.exceptionalNumberOfRollsPerTurn = 3
};

Scorecard.prototype.roll = function(pinsHit) {
  this.verifyRoll(pinsHit);
  this.currentTurnStorage.push(pinsHit);
  if (this.shouldAddSpareBonus()) {
    this.previousTurnStorage.push(pinsHit);
  };
  if (this.shouldAddStrikeBonus()) {
    this.previousTurnStorage.push(pinsHit);
  };
  if (this.shouldAddCumulativeStrikeBonus()) {
    this.twoTurnsAgoStorage.push(pinsHit);
  };
  this.moveToNextStageOfTurn();
};

Scorecard.prototype.cumulativeScore = function(){
  var allScoresFlatArray = this.flatten(this.gameStorage);
  var totalScoreSoFar = this.sumArray(allScoresFlatArray);
  return totalScoreSoFar;
};

Scorecard.prototype.moveToNextStageOfTurn = function () {
  if (this.isRollOne()) {
    this.currentStageOfTurn = this.normalNumberOfRollsPerTurn ;
  }
  else if (this.shouldReset()) {
    this.resetTurn();
  }
  else if (this.thereWillBeAThirdRoll()) {
    this.currentStageOfTurn = this.exceptionalNumberOfRollsPerTurn;
  };
};

Scorecard.prototype.resetTurn = function () {
    this.updateGameStorageWithTurn(this.currentTurnStorage);
    this.twoTurnsAgoStorage = this.previousTurnStorage;
    this.previousTurnStorage = this.currentTurnStorage;
    this.currentTurnStorage = [];
    this.currentStageOfTurn = 1;
};

Scorecard.prototype.verifyRoll = function(roll) {
  if (roll > this.numberOfPins || roll < 0) {
    throw "Rolls can only score 0 to 10 inclusive";
  }
  else {
    return roll;
  }
};

Scorecard.prototype.verifyTurn = function(firstRoll, secondRoll) {
  if ((+firstRoll + +secondRoll > this.numberOfPins || +firstRoll + +secondRoll < 0)  && this.turnNumber < this.numberOfTurns) {
    throw "Before bonuses, two rolls can only score 0 to 10 inclusive";
  }
  else {
    return +firstRoll + +secondRoll;
  }
};

Scorecard.prototype.updateGameStorageWithTurn = function(turnResult) {
  this.verifyTurn(this.currentTurnStorage[0],this.currentTurnStorage[1]);
  this.gameStorage.push(turnResult);
  this.increaseTurnCount();
};

Scorecard.prototype.increaseTurnCount = function () {
  this.turnNumber ++
  if (this.turnNumber -1 > this.numberOfTurns) {
    this.turnNumber = "Game Over";
    throw "You only get "+this.numberOfTurns+" turns";
  };
};

Scorecard.prototype.flatten = function(arrayOfArrays){
  var flattened = [];
  flattened = flattened.concat.apply(flattened, arrayOfArrays);
  return flattened;
};

Scorecard.prototype.sumArray = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  })
};

Scorecard.prototype.isASpareOrStrike = function(turn){
  return this.isASpare(turn) || this.isAStrike(turn);
};

Scorecard.prototype.isASpare = function(turn){
  return turn[0] < this.numberOfPins
    && this.sumArray(turn) === this.numberOfPins;
;}

Scorecard.prototype.isAStrike = function(turn){
  return turn[0] === this.numberOfPins;
;}

Scorecard.prototype.shouldAddSpareBonus = function(){
  return this.currentStageOfTurn === 1
    && this.turnNumber > 1
    && this.isASpareOrStrike(this.previousTurnStorage)
};

Scorecard.prototype.shouldAddStrikeBonus = function(){
  return this.currentStageOfTurn === this.normalNumberOfRollsPerTurn
    && this.turnNumber > 1
    && this.isAStrike(this.previousTurnStorage);
};

Scorecard.prototype.shouldAddCumulativeStrikeBonus = function(){
  return this.currentStageOfTurn !== this.normalNumberOfRollsPerTurn
    && this.turnNumber > 2
    && this.isNotRollThree()
    && this.isAStrike(this.previousTurnStorage)
    && this.isAStrike(this.twoTurnsAgoStorage);
};

Scorecard.prototype.shouldReset = function () {
  return this.isNotLastTurn() || this.isRollThree();
};

Scorecard.prototype.isRollOne = function () {
  return this.currentStageOfTurn === 1;
};

Scorecard.prototype.isRollTwo = function () {
  return this.currentStageOfTurn === this.normalNumberOfRollsPerTurn;
};

Scorecard.prototype.thereWillBeAThirdRoll = function () {
  return this.isLastTurn() && this.isASpareOrStrike && this.isRollTwo();
};

Scorecard.prototype.isRollThree = function () {
  return this.currentStageOfTurn === this.exceptionalNumberOfRollsPerTurn;
};

Scorecard.prototype.isNotRollThree = function () {
  return this.currentStageOfTurn < this.exceptionalNumberOfRollsPerTurn;
};

Scorecard.prototype.isLastTurn = function () {
  return this.turnNumber === this.numberOfTurns;
};

Scorecard.prototype.isNotLastTurn = function () {
  return this.turnNumber < this.numberOfTurns;
};
