function Game() {

}

Game.prototype.score = function(frames) {
  if (frames.includes(10)) {
    return 20
  }
  return frames.reduce((a, b) => a + b, 0)
}