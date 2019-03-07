function Game() {

  this.score = 0;
  this.frames = Array();
}

Game.prototype.addFrame = function(firstRoll, secondRoll) {
  
  var frame = new Frame(firstRoll, secondRoll);

  this.frames.push(frame);
}

Game.prototype.scoreGame = function() {

  this.frames.forEach(function(frame) {
    this.score += frame.score;
  });
}