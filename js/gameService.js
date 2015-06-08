bowlingCalc.factory('Game', function(){

  var Game = function(arrayOfRolls, FrameClass, ScoreCard){
    this.arrayOfRolls = arrayOfRolls;
    this.FrameClass =  FrameClass
    this.ScoreCard = ScoreCard
    this.allFrames = [];
    this.asignInputToFrames();
  };

  Game.prototype.asignInputToFrames = function() {
    while(this.arrayOfRolls.length > 0){
      var frame = new this.FrameClass();
      this.putRollIn(frame);
      if (!frame.is_over){
        this.putRollIn(frame);
      };
      this.allFrames.push(frame);
    }
  };

  Game.prototype.putRollIn = function(frame) {
    var currRoll = this.arrayOfRolls.shift();
    frame.roll(currRoll)
  };

  Game.prototype.scoreForFrame = function(n) {
    var scorecard = new this.ScoreCard(n, this.allFrames)
    return scorecard.score;
  };

  return Game

});