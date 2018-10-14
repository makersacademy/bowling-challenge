function BowlingScorer() {
  this._scoreCard = [];
}

  BowlingScorer.prototype.roll = function(pinsDown) {
    this._scoreCard.push(pinsDown);
  }

  BowlingScorer.prototype.score = function() {
      var scoreSF = 0;
      var roll = 0;

    for(var frame = 0; frame < 10; frame++) {
      if (this._scoreCard[roll] + this._scoreCard[roll + 1] == 10) {
          scoreSF += this._scoreCard[roll] + this._scoreCard[roll + 1] + this._scoreCard[roll + 2];
      } else {
          scoreSF += this._scoreCard[roll] + this._scoreCard[roll + 1];
      }
      roll += 2;
    }
    return scoreSF;
};
