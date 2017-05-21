function ScoreCard() {
  this.f1b1 = '';
  this.f1b2 = '';
  this.f1tot = '';
  this.f2b1 = '';
  this.f2b2 = '';
  this.f2tot = '';
  this.f3b1 = '';
  this.f3b2 = '';
  this.f3tot = '';
  this.f4b1 = '';
  this.f4b2 = '';
  this.f4tot = '';
  this.f5b1 = '';
  this.f5b2 = '';
  this.f5tot = '';
  this.f6b1 = '';
  this.f6b2 = '';
  this.f6tot = '';
  this.f7b1 = '';
  this.f7b2 = '';
  this.f7tot = '';
  this.f8b1 = '';
  this.f8b2 = '';
  this.f8tot = '';
  this.f9b1 = '';
  this.f9b2 = '';
  this.f9tot = '';
  this.f10b1 = '';
  this.f10b2 = '';
  this.f10b3 = '';
  this.f10tot = '';
  this.total = '';
}

ScoreCard.prototype.updateFrame = function(frame, ball, pins) {
  var ballCode = 'f' + frame + 'b' + ball
  this[ballCode] = this.properPrint(frame, ball, pins)
}

ScoreCard.prototype.updateTotals = function(frames) {
  this.total = 0;
  for (frame in frames) {
  var frameCode = 'f' + frames[frame].frameNumber + 'tot'
  this[frameCode] = frames[frame].ballOne + frames[frame].ballTwo + frames[frame].bonusScore + this.total
  this.total = this[frameCode]
  }
  if (this.total == 0) {this.total = ''}
}

ScoreCard.prototype.properPrint = function(frame, ball, pins) {
  var prevBallcode = 'f' + frame + 'b' + (ball-1)
  if (pins == 0) { return '-' }
  if (frame == 10 && pins == 10) { return 'X' }
  if (ball == 1 && pins == 10) { return 'X' }
  if (pins == 10 && this[prevBallcode] == '-') { return '/' }
  if ((pins + this[prevBallcode]) == 10) { return '/' }
  return pins
}
