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
  ]}

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
