function Game(){

  this.playedFrames = [];
  this.totalScore = 0;

  Game.prototype.getTotalScore = function() {
    return this.totalScore;
  };

  Game.prototype.calculateTotalScore = function() {
    var current_game = this
    this.playedFrames.forEach(function(frame){
      current_game.totalScore += frame.getScore();
    });
  };

  Game.prototype.addFrame = function(frame) {
    this.playedFrames.push(frame);
    this.calculateTotalScore();
  };

  Game.prototype.getPlayedFrames = function () {
    return this.playedFrames;
  };

}
