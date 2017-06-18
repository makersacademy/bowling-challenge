function Game(){

  this.MinScore = 0;
  this.MaxFrames = 10

  this.playedFrames = [];
  this.totalScore = this.MinScore;

  Game.prototype.getTotalScore = function() {
    return this.totalScore;
  };

  Game.prototype.calculateTotalScore = function() {
    var current_game = this
    this.totalScore = this.MinScore;
    this.playedFrames.forEach(function(frame, index){
      // Resets the bonus score to avoid unwanted accumulation
      frame.bonusScore = frame.MinScore;
      // All frames regardless of bonus status have their own total added to the total score
      if(frame.getStatus() == "spare"){
        // Guards against using getscore on undefined object before next frame is played
        if(current_game.playedFrames[index + 1]) {
          // Spares pickup the next bowl's score
          frame.bonusScore += current_game.playedFrames[index + 1].getBowls().firstBowl;
        };
      } else if(frame.getStatus() == "strike") {
        // special case for panultimate frame
        if(current_game.playedFrames[index + 1]  && index == 8) {
          frame.bonusScore += current_game.playedFrames[index + 1].getBowls().firstBowl;
          frame.bonusScore += current_game.playedFrames[index + 1].getBowls().secondBowl;
        }
        // Guards against using getscore on undefined object before next frame is played
        if(current_game.playedFrames[index + 1] && current_game.playedFrames[index + 2]) {
          // Strikes pickup the next two played bowls
          frame.bonusScore += current_game.playedFrames[index + 1].getBowls().firstBowl;
            // Will pickup the firstBowl of the frame after the next frame if next frame is a strike
            if(current_game.playedFrames[index + 1].getBowls().firstBowl === frame.MaxScore) {
              frame.bonusScore += current_game.playedFrames[index + 2].getBowls().firstBowl;
            // Otherwise it will get the next frame's secondBowl
            }else{
              frame.bonusScore += current_game.playedFrames[index + 1].getBowls().secondBowl;
            }
        };
      };
      current_game.totalScore += frame.getScore();
    });
  };

  Game.prototype.addFrame = function(frame) {
    if (this.playedFrames.length >= this.MaxFrames) {
      throw new Error("You can only play 10 frames per game.")
    }
    this.playedFrames.push(frame);
    this.calculateTotalScore();
  };

  Game.prototype.getPlayedFrames = function () {
    return this.playedFrames;
  };

}
