NUMBER_OF_FRAMES = 10

function Game() {
  this.framesList = [];
  this.score = 0;
  this.strikeBonus = 0;
}

Game.prototype.getMostRecentFrame = function () {
  return this.framesList[this.framesList.length-1];
};

Game.prototype.getPreviousFrame = function () {
  return this.framesList[this.framesList.length-2];
};

Game.prototype.getPreviousPreviousFrame = function () {
  return this.framesList[this.framesList.length-3];
};

Game.prototype.showGamesFrames = function() {
  var list = []
  for(var i = 0; i<this.framesList.length; i++) {
    list.push(this.framesList[i].bowls)
  };
  return list;
}

Game.prototype.checkGameOver = function(){
  if (this.framesList.length >= NUMBER_OF_FRAMES) {
    throw new Error("Game has finished");
  };
}

Game.prototype.newFrame = function(firstBowl, secondBowl){
  this.checkGameOver();
  var frame = new Frame();
  frame.bowl(firstBowl, secondBowl);
  this.framesList.push(frame);
  this.calcScore();
}

Game.prototype.calcScore = function() {
  if (this.framesList.length == 1 && this.getMostRecentFrame().isASpare()) {
    this.score += this.getMostRecentFrame().frameScore;
  } else if (this.framesList.length >= 2 && this.getPreviousFrame().isASpare()) {
    var spareBonus = this.getMostRecentFrame().bowls[0];
    this.score += spareBonus;
    this.score += this.getMostRecentFrame().frameScore;
  } else if (!this.getMostRecentFrame().isASpare() && !this.getMostRecentFrame().isAStrike()){
    this.score += this.getMostRecentFrame().frameScore;
  }
}
