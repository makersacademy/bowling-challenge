var Game = function () {
  this.total = 0
  this.frames = []
}

Game.prototype.add_frame = function (frame) {
  this.frames.push(frame)
}

Game.prototype.total_score = function() {
  return this.frames.reduce(
    function(total_score, frame, frames_index, frames) {
      return total_score + frame.total_with_bonus(frames[frames_index + 1], frames[frames_index + 2])
  }, this.total)
}

console.log('New bowling game')
