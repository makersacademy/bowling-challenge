NUMBER_OF_FRAMES = 10

function Game() {
  this.framesList = [];
}

Game.prototype.newFrame = function(firstBowl, secondBowl) {
  if (this.framesList.length >= NUMBER_OF_FRAMES) {
    throw new Error("Game has finished");
  };
  frame = new Frame();
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
