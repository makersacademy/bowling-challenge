function Game() {
  this.score = 0
  this.framePoints1 = 0
  this.framePoints2 = 0
  this.framePoints3 = 0
}

Game.prototype.play = function(frame, x) {
  if (frame.frameScores.length >= 9){
    this.play_finalFrame(frame, x)
  } else {
  frame.bowl(x)}
};

Game.prototype.get_score = function(frame) {
  var scores = [].concat.apply([], frame.frameScores)
  this.score += scores.reduceRight(function(a,b){return a+b;})
};

Game.prototype.bowl1_score = function(frame){
  this.framePoints1 = frame.currentFrame[0]
};

Game.prototype.bowl2_score = function(frame){
  this.framePoints2 = frame.frameScores.slice(-1)[0][1]
};

Game.prototype.bowl3_score = function(frame){
  this.framePoints3 = frame.frameScores.slice(-1)[0][2]
}

Game.prototype.play_finalFrame = function(frame, x) {
  frame.lastFrame_bowl(x)
};

Game.prototype.newGame = function(frame) {
  frame.resetGame();
  this.score = 0
};
