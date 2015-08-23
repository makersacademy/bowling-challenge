var Scorecard = function() {
};


Scorecard.prototype.recordRollA = function(rollA) {
  if (rollA <= 10 && rollA >= 0) {
    return rollA;
  }
  else {
    return "Invalid pin amount";
  }
};

Scorecard.prototype.recordRollB = function(rollB) {
  if (rollB <= 10 && rollB >= 0) {
    return rollB;
  }
  else {
    return "Invalid pin amount";
  }
};

Scorecard.prototype.recordTurn = function(rollA, rollB) {
  if (rollA + rollB > 10 || rollA + rollB < 0) {
    return "Invalid pin amount";
  }
  else {
    return rollA + rollB;
  }
};
