function Scorecard(frame = new Frame()) {
  this.frame = frame
  this.scores = []
}

Scorecard.prototype.bowl = function(){
  this.scores.push(this.frame.bowl())
}
