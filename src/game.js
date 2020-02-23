var Game = function () {
  this.total = 0
  this.frames = []
  this.current_frame = 1
  this.current_roll = 1
}

Game.prototype.add_frame = function (frame) {
  this.frames.push(frame)
}

Game.prototype.update_total = function(frame) {
  this.total += frame.total_without_bonus()
  return this.total
}

console.log('New bowling game')
