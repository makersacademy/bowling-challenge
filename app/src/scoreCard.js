'use strict';

function ScoreCard() {
  this.TOTALPINS = 10;
  this.results = get2DArray(10);
};

ScoreCard.prototype.store = function(result, roundNumber) {
  if(roundNumber === 9) {
    result = this.verifyLastRoundPins(result, roundNumber);
  }
  else { result = this.verifyPins(result, roundNumber); }
  this.results[roundNumber].push(Number(result));
};

ScoreCard.prototype.verifyPins = function(result, roundNumber) {
  var firstRoll = this.getRoll(roundNumber, 0);
  if(result > this.TOTALPINS) { result = this.TOTALPINS; }
  if(result + firstRoll > this.TOTALPINS) { result = this.TOTALPINS - firstRoll; }
  return result;
};

ScoreCard.prototype.verifyLastRoundPins = function(result, roundNumber) {
  if(result > this.TOTALPINS) { result = this.TOTALPINS; }
  return this.removeExcessPins(result, roundNumber)
};

ScoreCard.prototype.removeExcessPins = function(result, roundNumber) {
  var firstRoll = this.getRoll(roundNumber, 0), secondRoll = this.getRoll(roundNumber, 1);
  if(result + firstRoll > this.TOTALPINS
     && firstRoll !== this.TOTALPINS
     && firstRoll + secondRoll !== this.TOTALPINS ) {
                return this.TOTALPINS - firstRoll;
  } else if(result + secondRoll > this.TOTALPINS
            && firstRoll === this.TOTALPINS
            && secondRoll !== this.TOTALPINS) {
               return this.TOTALPINS - secondRoll;
  }
  return result
}

ScoreCard.prototype.getRound = function(roundNumber) {
  return this.results[roundNumber];
}

ScoreCard.prototype.getRoll = function(roundNumber, rollNumber) {
  return this.getRound(roundNumber)[rollNumber] || 0;
};
