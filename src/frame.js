function Frame() {
  this.basicScore = [
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
  this.basicScore[frame - 1]['roll1'] = score1
};

Frame.prototype.roll2 = function(frame, score2) {
  this.basicScore[frame - 1]['roll2'] = score2
};
