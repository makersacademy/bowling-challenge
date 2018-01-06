  NUMBER_OF_FRAMES = 10

  function Game() {
    this.framesList = [];
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
    this.createFrame();
    frame.bowl(firstBowl, secondBowl);
    this.framesList.push(frame);
    this.recordScore()
  };

Game.prototype.createFrame = function () {
  this.framesList.length != 9 ? (frame = new Frame()) : (frame = new Frame(true));
};

  Game.prototype.recordScore = function () {
    this.spareBonus();
    this.strikeBonus();
    // this needs fixing later
    if (this.getMostRecentFrame().frameScore != ("Strike" || "Spare")){
      this.score += this.getMostRecentFrame().frameScore;
    }
  };

  Game.prototype.spareBonus = function(){
    if (this.framesList.length > 1 && this.getPreviousFrame().frameScore == "Spare"){
      var spareScore = (10 + this.getMostRecentFrame().bowls[0]);
      this.getPreviousFrame().frameScore = spareScore;
    }
  }

  Game.prototype.strikeBonus = function(){
    if (this.framesList.length > 1 && this.getPreviousFrame().frameScore == "Strike") {
      if (this.getMostRecentFrame().bowls[1] == null){
        this.getPreviousFrame().frameScore = "awaiting double strike bonus"
      } else {
      var strikeScore = (10 + this.getMostRecentFrame().bowls[0] + this.getMostRecentFrame().bowls[1]);
      this.getPreviousFrame().frameScore = strikeScore;
      }
    }
    this.doubleStrikeBonus()
  }

  Game.prototype.doubleStrikeBonus = function() {
    if (this.framesList.length > 2 && this.getPreviousPreviousFrame().frameScore == "awaiting double strike bonus"){
      var strikeScore = (10 + this.getPreviousFrame().bowls[0] + this.getMostRecentFrame().bowls[0]);
      this.getPreviousPreviousFrame().frameScore = strikeScore;
    }
  }
