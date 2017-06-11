function Game(){

  this.playedFrames = [];

  Game.prototype.bowlBall = function () {
    frame01 = "frame01";
    this.playedFrames.push(frame01)
  };

  Game.prototype.getPlayedFrames = function () {
    return this.playedFrames;
  };

}
