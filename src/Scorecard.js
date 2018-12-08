function Scorecard() {
  this._scores = [];
  this._frames = [];
};

Scorecard.prototype.throw = function(pinsKnockedDown) {
  var itsTheFirstThrowOfAFrame = (this._scores.length % 2 == 0);
  var theyKnockDownTenPins = (pinsKnockedDown == 10);

  if (itsTheFirstThrowOfAFrame && theyKnockDownTenPins) { this.recordsAStrike(); }
  else { this.recordsNumberOf(pinsKnockedDown); }
  this.thenTalliesTheScoreAtTheEndOfEachFrame();
};

Scorecard.prototype.recordsAStrike = function() {
  this._scores.push(10, 0);
};

Scorecard.prototype.recordsNumberOf = function(pinsKnockedDown) {
  this._scores.push(pinsKnockedDown);
};

Scorecard.prototype.thenTalliesTheScoreAtTheEndOfEachFrame = function() {
  var i, hold = 0;
  var numberOfThrowsSoFar = (this._scores.length);
  
  for (i = 0; i < numberOfThrowsSoFar; i++) {
    var itsTheFirstScoreOfTheFrame = (i % 2 == 0);
    var theFirstScoreOfTheFrame = this._scores[i - 1];
    var theSecondScoreOfTheFrame = thatScore = (this._scores[i]);
    var theScoreFromTheFirstThrowOfTheNextFrame = (this._scores[i + 1]);
    var theScoreFromTheSecondThrowOfTheNextFrame = (this._scores[i + 2]);
    var theScoreFromTheThrowAfterThat = (this._scores[i + 3]);
    var theyScoredASpareThisFrame = (theFirstScoreOfTheFrame + theSecondScoreOfTheFrame == 10);
    var theyScoredAStrikeThisFrame = (theFirstScoreOfTheFrame == 10);
    var thatWasAlsoAStrike = (theScoreFromTheFirstThrowOfTheNextFrame == 10);

    if (itsTheFirstScoreOfTheFrame) { hold += thatScore; }
    else { hold += theSecondScoreOfTheFrame;
      if (theyScoredAStrikeThisFrame) { hold += theScoreFromTheFirstThrowOfTheNextFrame;
        if (thatWasAlsoAStrike) { hold += theScoreFromTheThrowAfterThat; }
        else { hold += theScoreFromTheSecondThrowOfTheNextFrame; }
      }
      else if (theyScoredASpareThisFrame) { hold += theScoreFromTheFirstThrowOfTheNextFrame; }
      if (!isNaN(hold)) { this.recordsTheTallyAtTheEndOfThisFrameAs(hold, i); }
    }
  }
};

Scorecard.prototype.recordsTheTallyAtTheEndOfThisFrameAs = function(hold, i) {
  this._frames[(i / 2) - 0.5] = hold;
};
