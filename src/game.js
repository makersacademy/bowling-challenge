function Game(){

  this.playedFrames = [];
  this.totalScore = 0;

  Game.prototype.getTotalScore = function() {
    return this.totalScore;
  };

  Game.prototype.calculateTotalScore = function() {
    var current_game = this
    this.totalScore = 0;
    this.playedFrames.forEach(function(frame, index){
      if(frame.getStatus() == "spare"){
        current_game.totalScore += frame.getScore();
        // Guards against using getscore on undefined object before next frame is played
        if(typeof current_game.playedFrames[index + 1] != "undefined") {
          current_game.totalScore += current_game.playedFrames[index + 1].getScore();
        };
      } else {
        current_game.totalScore += frame.getScore();
      };
    });
  };

  Game.prototype.addFrame = function(frame) {
    if (this.playedFrames.length >= 10) {
      throw new Error("You can only play 10 frames per game.")
    }
    this.playedFrames.push(frame);
    this.calculateTotalScore();
  };

  Game.prototype.getPlayedFrames = function () {
    return this.playedFrames;
  };

}
