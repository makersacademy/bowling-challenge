function BowlingScorer() {
    this._scoreCard = [];
};

BowlingScorer.prototype.roll = function(pinsDown) {
    this._scoreCard.push(pinsDown);
};

BowlingScorer.prototype.score = function() {
    var scoreSF = 0;
    var roll = 0;
    var here = this;

    for(var frame = 0; frame < 10; frame++) {
        if (isStrike()) {
            scoreSF += strikeScore();
            roll++;
        } else if (isSpare()) {
            scoreSF += spareScore();
            roll += 2;
        } else {
            scoreSF += noStrikeSpare();
            roll += 2;
        }
    }

    return scoreSF;

    function isSpare() {
        return here._scoreCard[roll] + here._scoreCard[roll + 1] == 10;
    }

    function spareScore() {
        return here._scoreCard[roll] + here._scoreCard[roll + 1] + here._scoreCard[roll + 2];
    }

    function isStrike() {
        return here._scoreCard[roll] == 10;
    }

    function strikeScore() {
      return here._scoreCard[roll] + here._scoreCard[roll + 1] + here._scoreCard[roll + 2];
    }

    function noStrikeSpare() {
      return here._scoreCard[roll] + here._scoreCard[roll + 1];
    }
  };
