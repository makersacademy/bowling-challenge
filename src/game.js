NUMBER_OF_FRAMES = 10

function Game() {
  this.framesList = [];
  this.score = 0;
}

Game.prototype.newFrame = function(firstBowl, secondBowl){
  this.checkGameOver();
  var frame = new Frame();
  frame.bowl(firstBowl, secondBowl);
  this.framesList.push(frame);
  this.calcScore(firstBowl, secondBowl);
}

Game.prototype.checkGameOver = function(){
  if (this.framesList.length >= NUMBER_OF_FRAMES) {
    throw new Error("Game has finished");
  };
}

Game.prototype.calcScore = function(firstBowl, secondBowl){
  if(this.framesList.length >= 2 && this.spareDetector()) {
    this.addSpareBonus();
  }
  this.score += (firstBowl + secondBowl)
}

Game.prototype.spareDetector = function(){
  return this.framesList[this.framesList.length-2].isASpare();
}

Game.prototype.addSpareBonus = function () {
  var bonus = this.framesList[this.framesList.length-1].bowls[0];
  this.score += bonus;
};

// should be refactored -- maybe redundant now
Game.prototype.showGamesFrames = function() {
  var list = []
  for(var i = 0; i<this.framesList.length; i++) {
    list.push(this.framesList[i].bowls)
  };
  return list;
}
