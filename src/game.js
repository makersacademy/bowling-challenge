function Game(){

  this.playedFrames = [];
  this.totalScore = 0

  Game.prototype.getTotalScore = function() {
    return this.totalScore;
  };

  Game.prototype.startFrame = function(frame) {
    this.playedFrames.push(frame);
  }

  Game.prototype.getPlayedFrames = function () {
    return this.playedFrames;
  };

}
