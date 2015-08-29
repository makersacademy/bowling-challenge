var Scorecard = function() {
  this.storage = [];
  this.turnNumber = 1;
};

Scorecard.prototype.verifyRoll = function(roll) {
  if (roll <= 10 && roll >= 0) {
    return roll;
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
