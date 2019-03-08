function Frame() {
  this.scoreCard = [
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'special': null, 'total': null},
    {'roll1': null, 'roll2': null, 'total': null}
  ]
}

Frame.prototype.roll1 = function(frame, score1) {
  this.score1 = score1
  this.scoreCard[frame - 1]['roll1'] = this.score1
  if(score1 === 10) {
    this.scoreCard[frame - 1]['roll2'] = 0
    this.scoreCard[frame - 1]['special'] = 'strike'
  }
};

Frame.prototype.roll2 = function(frame, score2) {
  this.scoreCard[frame - 1]['roll2'] = score2
  if(this.score1 + score2 === 10) {
    this.scoreCard[frame - 1]['special'] = 'spare'
  }
};

Frame.prototype.sumTotal = function(frame) {
  this.sumCurrent(frame)
  if (this.scoreCard[frame - 1]['special'] == 'strike') {
    this.scoreCard[frame - 1]['total'] += this.sumStrike(frame)
  } else if (this.scoreCard[frame - 1]['special'] == 'spare') {
    this.scoreCard[frame - 1]['total'] += this.sumSpare(frame)
  };
};

Frame.prototype.sumCurrent = function(frame) {
  var e = frame - 1
  var currentFrame = this.scoreCard[e]['roll1'] + this.scoreCard[e]['roll2']
  var arr = []
  for (var i = 0; i < e; i++) {
    arr.push(this.scoreCard[i]['total'])
  }
  var prevTotals = arr.reduce(function(arr, b) { return arr + b; }, 0);
  this.scoreCard[e]['total'] = currentFrame + prevTotals
};

Frame.prototype.sumStrike = function(strikeFrame) {
  nextRoll1 = this.scoreCard[strikeFrame]['roll1']
  nextRoll2 = this.scoreCard[strikeFrame]['roll2']
  return nextRoll1 + nextRoll2
};

Frame.prototype.sumSpare = function(spareFrame) {
  return this.scoreCard[spareFrame]['roll1']
};
