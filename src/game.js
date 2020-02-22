var Game = function () {
  this.total = 0
  this.frames = []
  this.frame = 1
  this.roll = 1
}

Game.prototype.add_frame = function (frame) {
  this.frames.push(frame)
}

console.log('New game')
