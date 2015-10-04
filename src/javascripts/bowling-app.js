function Game() {
  this.score = 0
  this.frames_remaining = 10
};

Game.prototype.play = function() {
  return Math.floor(Math.random() * (0 + 11)) - 0;
};

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
