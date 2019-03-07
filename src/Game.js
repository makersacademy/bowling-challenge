function Game() {
  this.score = 0;
  this.frames = Array(11);
}

Game.prototype.scoreFrame = function() {
  var total = 0;

  for(var frame = 0; frame <= frames.length; frame++) {
    total += this.frames[frame];
  }
}