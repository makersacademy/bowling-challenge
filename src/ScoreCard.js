function ScoreCard() {
  this.total = '';
}

ScoreCard.prototype.updateFrame = function(frame, ball, pins) {
  var ballCode = 'f' + frame + 'b' + ball
  this[ballCode] = this.properPrint(frame, ball, pins)
}

ScoreCard.prototype.updateTotals = function(frames) {
  var frame = 0,
      frameCode = '';
  this.total = 0;
  for (frame in frames) {
    if (frame >= 0) {
      frameCode = 'f' + frames[frame].frameNumber + 'tot'
      this[frameCode] = frames[frame].ballOne + frames[frame].ballTwo + frames[frame].bonusScore + this.total
      this.total = this[frameCode]
    }
  }
  if (this.total === 0) {
    this.total = ''
  }
}

ScoreCard.prototype.properPrint = function(frame, ball, pins) {
  var prevBallcode = 'f' + frame + 'b' + (ball - 1)
  if (pins === 0) { return '-' }
  if (frame === 10 && pins === 10) { return 'X' }
  if (ball === 1 && pins === 10) { return 'X' }
  if (pins === 10 && this[prevBallcode] === '-') { return '/' }
  if (pins + this[prevBallcode] === 10) { return '/' }
  return pins
}
