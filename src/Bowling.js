function Game() {

}

Game.prototype.score = function(frames) {
  return frames.reduce((a, b) => a + b, 0)
}