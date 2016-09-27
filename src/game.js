function Game(){
  this.gameScore = 0
  this.frames = []
  this.scoreCard = []
}

Game.prototype.Bowl = function () {
  var frame = new Frame();
  frame.BowlFrame();
  this.frames.push(frame.frameScore)
};


Game.prototype.isGutter = function () {
  return this.gameScore === 0
};
