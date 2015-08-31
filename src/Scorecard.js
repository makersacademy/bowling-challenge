var Scorecard = function() {
  this.gameStorage = [];
  this.turnNumber = 1;
  this.currentTurnStorage = [];
  this.previousTurnStorage = [];
  this.twoTurnsAgoStorage = [];
  this.currentStageOfTurn = 1;
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

Scorecard.prototype.moveToNextStageOfTurn = function () {
  if (this.isRollOne()) {
    this.currentStageOfTurn = 2 ;
  }
  else if (this.shouldReset()) {
    this.resetTurn();
  }
  else if (this.thereWillBeAThirdRoll()) {
    this.currentStageOfTurn = 3;
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

Scorecard.prototype.cumulativeScore = function(arrayOfArrays){
  var allScoresFlatArray = this.flatten(arrayOfArrays);
  var totalScore = this.sumArray(allScoresFlatArray);
  return totalScore;
};

Scorecard.prototype.isASpareOrStrike = function(turn){
  if (this.isASpare(turn) || this.isAStrike(turn)){
    return true;
  }
  else {
    return false;
  }
};

Scorecard.prototype.isASpare = function(turn){
  if (turn[0] < 10 && this.sumArray(turn) === 10){
      return true;
  }
  else {
    return false;
  }
;}

Scorecard.prototype.isAStrike = function(turn){
  if (turn[0] === 10){
    return true;
  }
  else {
    return false;
  }
;}

Scorecard.prototype.shouldAddSpareBonus = function(){
  if (this.currentStageOfTurn === 1
    && this.turnNumber > 1
    && this.isASpareOrStrike(this.previousTurnStorage)) {
      return true;
    }
  else {
    return false;
  }
};

Scorecard.prototype.shouldAddStrikeBonus = function(){
  if (this.currentStageOfTurn === 2
    && this.turnNumber > 1
    && this.isAStrike(this.previousTurnStorage)) {
      return true;
    }
  else {
    return false;
  }
};

Scorecard.prototype.shouldAddCumulativeStrikeBonus = function(){
  if (this.currentStageOfTurn !== 2
    && this.turnNumber > 2
    && this.isAStrike(this.previousTurnStorage)
    && this.isAStrike(this.twoTurnsAgoStorage)) {
      return true;
    }
  else {
    return false;
  }
};

Scorecard.prototype.shouldReset = function () {
  if (this.isNotLastTurn() || this.isRollThree()){
    return true;
  }
  else {
    return false;
  }
};

Scorecard.prototype.isRollOne = function () {
  if (this.currentStageOfTurn === 1){
    return true;
  }
  else {
    return false;
  }
};

Scorecard.prototype.isRollTwo = function () {
  if (this.currentStageOfTurn === 2){
    return true;
  }
  else {
    return false;
  }
};


Scorecard.prototype.thereWillBeAThirdRoll = function () {
  if (this.isLastTurn() && this.isAStrike && this.isRollTwo()){
    return true;
  }
  else {
    return false;
  }
};

Scorecard.prototype.isRollThree = function () {
  if (this.currentStageOfTurn === 3){
    return true;
  }
  else {
    return false;
  }
};


Scorecard.prototype.isLastTurn = function () {
  if (this.turnNumber === 10){
    return true;
  }
  else {
    return false;
  }
};

Scorecard.prototype.isNotLastTurn = function () {
  if (this.turnNumber < 10){
    return true;
  }
  else {
    return false;
  }
};



Scorecard.prototype.resetTurn = function () {
    this.updateGameStorageWithTurn(this.currentTurnStorage);
    this.twoTurnsAgoStorage = this.previousTurnStorage;
    this.previousTurnStorage = this.currentTurnStorage;
    this.currentTurnStorage = [];
    this.currentStageOfTurn = 1;
};




Scorecard.prototype.verifyRoll = function(roll) {
  if (roll > 10 || roll < 0) {
    throw "Rolls can only score 0 to 10 inclusive";
  }
  else {
    return roll;
  }
};

Scorecard.prototype.verifyTurn = function(rollA, rollB) {
  if ((+rollA + +rollB > 10 || +rollA + +rollB < 0)  && this.turnNumber < 10) {
    throw "Before bonuses, two rolls can only score 0 to 10 inclusive";
  }
  else {
    return +rollA + +rollB;
  }
};

Scorecard.prototype.increaseTurnCount = function () {
  this.turnNumber ++
  if (this.turnNumber > 11) {
    this.turnNumber = "Game Over";
    throw "You only get 10 turns";
  };
};

Scorecard.prototype.updateGameStorageWithTurn = function(turnResult) {
  this.verifyTurn(this.currentTurnStorage[0],this.currentTurnStorage[1]);
  this.gameStorage.push(turnResult);
  if (this.turnNumber === 10 && this.currentStageOfTurn === 3){
    this.twoTurnsAgoStorage.pop();
  };
  this.increaseTurnCount();
};
