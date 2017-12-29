NUMBER_OF_FRAMES = 10

function Game() {
  this.framesList = [];
  this.score = new Score();
}

Game.prototype.newFrame = function(firstBowl, secondBowl) {
  this.checkGameOver();
  var frame = new Frame();
  frame.bowl(firstBowl, secondBowl);
  this.framesList.push(frame);
}

// should be refactored
Game.prototype.showGamesFrames = function() {
  var list = []
  for(var i = 0; i<this.framesList.length; i++) {
    list.push(this.framesList[i].bowls)
  };
  return list;
}

Game.prototype.checkGameOver = function() {
  if (this.framesList.length >= NUMBER_OF_FRAMES) {
    throw new Error("Game has finished");
  };
}
