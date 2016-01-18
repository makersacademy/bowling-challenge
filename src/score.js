function Score() {
  this.BONUS_SCORE = 10;
}

Score.prototype.giveScore = function(pins) {
  this.scores = [];
  var total = 0;

  for(var i = 0; i < (pins.length-1); i++) {
    if(pins[i][0] === this.BONUS_SCORE) {
      total += this._calculateStrikeScore(pins, i);
    } else if(pins[i][0] + pins[i][1] === this.BONUS_SCORE) {
      total += this._calculateSpareScore(pins, i);
    } else {
      total += (pins[i][0] + pins[i][1]);
    }
    this.scores.push(total);
  }

  this.scores.push(total + this._calculateLastScore(pins));
  return this.scores;
};

Score.prototype._calculateStrikeScore = function(pins, i) {
  var strikeScore = this.BONUS_SCORE;
  var flattenedPins = flattenArraySection(pins, i);
  if(typeof flattenedPins[0] !== 'undefined') {strikeScore += flattenedPins[0];}
  if(typeof flattenedPins[1] !== 'undefined') {strikeScore += flattenedPins[1];}
  return strikeScore;
}

Score.prototype._calculateSpareScore = function(pins, i) {
  var spareScore = this.BONUS_SCORE;
  var flattenedPins = flattenArraySection(pins, i);
  if(typeof flattenedPins[0] !== 'undefined') {spareScore += flattenedPins[0];}
  return spareScore;
}

Score.prototype._calculateLastScore = function(pins) {
  return (pins[pins.length-1]).reduce(add, 0);
}
