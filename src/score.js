function Score() {
  this.scores = [];
}

Score.prototype.giveScore = function(pins) {
  this.scores = [];
  var total = 0;
  var currentScore;

  for(var i = 0; i < (pins.length-1); i++) {
    if(pins[i][0] === 10) {
      currentScore = this._calculateStrikeScore(pins, i);
      total += currentScore;
    } else if(pins[i][0] + pins[i][1] === 10) {
      currentScore = this._calculateSpareScore(pins, i);
      total += currentScore;
    } else {
      total += (pins[i][0] + pins[i][1])
    }
    this.scores.push(total);
  }

  var sum = (pins[pins.length-1]).reduce(add, 0);
  this.scores.push(total + sum);
  return this.scores;
};

Score.prototype._calculateStrikeScore = function(pins, i) {
  var strikeScore = 0;
  var flattenedPins = flattenArraySection(pins, i);
  strikeScore += 10;
  if(typeof flattenedPins[0] !== 'undefined') {strikeScore += flattenedPins[0];}
  if(typeof flattenedPins[1] !== 'undefined') {strikeScore += flattenedPins[1];}
  return strikeScore;
}

Score.prototype._calculateSpareScore = function(pins, i) {
  var spareScore = 0;
  var flattenedPins = flattenArraySection(pins, i);
  spareScore += 10;
  if(typeof flattenedPins[0] !== 'undefined') {spareScore += flattenedPins[0];}
  return spareScore;
}
