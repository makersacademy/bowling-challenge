function FullGame () {
  this.frames = []
}

FullGame.prototype.bowl = function(number) {
  var frame = new Frame(number);
  this.frames.push(frame);
}

FullGame.prototype.totalGameScore = function() {
  return this.frames.reduce(function(score, frame, index, frames){
    return score + frame.totalscore(frames[1], frames[2])
  },0)
}
