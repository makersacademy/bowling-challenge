function Game(){
  this.frames = [];
}

Game.prototype.startGame = function(){
  for (var i = 0; i < 10; i++) {
    roll(this, frame[i]);
  }
};

  Game.prototype.scores = function (frameScore) {
    this.frames.push(frameScore);
    return this.frames;
  };
