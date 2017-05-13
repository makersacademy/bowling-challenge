function ScoreAdder() {
}

function add(score1, score2) {
  return score1 + score2;
}

ScoreAdder.prototype.updateScores = function(game) {
  var frame = '';
  for (frame in game) {
    if (frame.substring(0, 5) === 'frame') {
      this[frame] = game[frame].reduce(add, 0);
    }
  }
}

ScoreAdder.prototype.updateSpares = function(game) {
  var frame = '',
      frameKeyNumber = 0,
      nextFrame = '';
  for (frame in game) {
    frameKeyNumber = parseInt(frame.slice(-1), 6);
    if (this[frame] === 10 && frameKeyNumber < Object.keys(this).length) {
      nextFrame = game['frame' + (frameKeyNumber + 1)];
      this[frame] = add(10, nextFrame[0]);
    }
  }
}

ScoreAdder.prototype.updateStrikes = function(game) {

}
