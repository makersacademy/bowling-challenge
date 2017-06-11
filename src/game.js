function Game(){

  this.playedFrames = [];
  this.score = 0

  Game.prototype.getScore = function() {
    return this.score;
  };

  Game.prototype.bowlBall = function () {
    frame01 = "frame01";
    this.playedFrames.push(frame01);
  };

  Game.prototype.getPlayedFrames = function () {
    return this.playedFrames;
  };

}
