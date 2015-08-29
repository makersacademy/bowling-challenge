var Scorecard = function() {
  this.storage = [];
  this.turnNumber = 1;
};

Scorecard.prototype.verifyRollA = function(rollA) {
  if (rollA <= 10 && rollA >= 0) {
    return rollA;
  }
  else {
    throw "Rolls can only score 0 to 10 inclusive";
  }
};

Scorecard.prototype.verifyRollB = function(rollB) {
  if (rollB <= 10 && rollB >= 0) {
    return rollB;
  }
  else {
    throw "Rolls can only score 0 to 10 inclusive";
  }
};

Scorecard.prototype.verifyTurn = function(rollA, rollB) {
  if (+rollA + +rollB > 10 || +rollA + +rollB < 0) {
    throw "Rolls can only score 0 to 10 inclusive";
  }
  else {
    return +rollA + +rollB;
  }
};

Scorecard.prototype.increaseTurnCount = function () {
  this.turnNumber ++
};


Scorecard.prototype.updateStorageWithTurn = function(turnResult) {
  this.storage.push(turnResult);
  this.increaseTurnCount();
  if (this.turnNumber > 10) {
    throw "You only get 10 turns";
  };
};
