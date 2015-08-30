var Scorecard = function() {
  this.gameStorage = [];
  this.turnNumber = 1;
  this.currentTurnStorage = [];
  this.previousTurnStorage = [];
  this.currentStageOfTurn = 1;
};

Scorecard.prototype.sumTurn = function(array) {
  return array.reduce(function(a, b) {
  return a + b;
})};

Scorecard.prototype.roll = function (pinsHit) {
  this.verifyRoll(pinsHit);
  this.currentTurnStorage.push(pinsHit);
  if (this.currentStageOfTurn === 1 && this.turnNumber > 1 &&
    this.sumTurn(this.previousTurnStorage)===10){
    this.previousTurnStorage.push(pinsHit);
  };
  this.moveToNextStageOfTurn();
};

Scorecard.prototype.moveToNextStageOfTurn = function () {
  if (this.currentStageOfTurn === 1) {
    this.currentStageOfTurn ++ ;
  }
  else {
    this.verifyTurn(this.currentTurnStorage[0],this.currentTurnStorage[1]);
    this.updateGameStorageWithTurn(this.currentTurnStorage);
    this.currentStageOfTurn = 1;
    this.previousTurnStorage = this.currentTurnStorage;
    this.currentTurnStorage = [];
  }
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
  if (+rollA + +rollB > 10 || +rollA + +rollB < 0) {
    throw "Before bonses, two rolls can only score 0 to 10 inclusive";
  }
  else {
    return +rollA + +rollB;
  }
};

Scorecard.prototype.increaseTurnCount = function () {
  this.turnNumber ++
  if (this.turnNumber > 10) {
    this.turnNumber = "Game Over";
    throw "You only get 10 turns";
  };
};

Scorecard.prototype.updateGameStorageWithTurn = function(turnResult) {
  this.gameStorage.push(turnResult);
  this.increaseTurnCount();
};
