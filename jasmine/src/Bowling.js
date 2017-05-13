function Bowling() {
  this.isInGame = false;
  this.numOfThrows = 0;
  this.numOfPins = 0;
  this.numOfPinsLeftStanding = 0;
  this.frameScore = 0;
  this.frameNum = 1;
  this.currentGameScore = 0;
  this.numOfFrameThrows = 1;
  this.previousStrike = false;
  this.message = "";
  this.scoreCounter = 0;
  this.scoreIndex = [];
};


Bowling.prototype.startGame = function() {
  this.isInGame = true;
};

Bowling.prototype.incrementFrameNum = function() {
  this.frameNum = this.frameNum + 1
};

Bowling.prototype.getGameStatus = function() {
  if (this.isInGame === true){
    return "The Game has started!"
  }
  else if (this.isInGame === false){
    return "Press start to commence a game!"
  }
};

Bowling.prototype.incrementGameThrows = function() {
  this.numOfThrows = this.numOfThrows + 1;
};

Bowling.prototype.firstThrow = function() {
  this.numOfPins = Math.floor((Math.random()*10)+1);
  this.numOfPinsLeftStanding = 10 - this.numOfPins;
  if (this.numOfPins === 10) {
   this.message = "On your first throw you got a strike!"
 }
  else {
    this.message = "On your first throw you hit " + this.numOfPins + " pins!"
  }

};

Bowling.prototype.secondThrow = function() {
  this.numOfPins = Math.floor((Math.random()*this.numOfPinsLeftStanding)+1);
  this.message = "On your second throw you hit " + this.numOfPins + " pins!"
};

Bowling.prototype.incrementFrameThrows = function() {
  this.numOfFrameThrows = this.numOfFrameThrows + 1;
};

Bowling.prototype.resetFrame = function() {
  this.frameNum = this.frameNum + 1;
  this.frameScore = 0;
  this.numOfFrameThrows = 1;
};

Bowling.prototype.scoringFooter = function() {
  this.scoreIndex[this.scoreCounter] = this.numOfPins;
  this.scoreCounter += 1;
};

Bowling.prototype.scoreFrame = function() {
  //when you score a strike on the first throw
  if ((this.numOfFrameThrows < 2) && (this.numOfPins === 10) && (this.previousStrike === false)){
      this.currentGameScore += this.numOfPins;
      this.previousStrike = true;
      this.resetFrame();
      this.scoringFooter();
      this.scoreCounter += 1;
    }
    //when you score a strike and the previous bowl was a strike as well
    else if ((this.numOfFrameThrows < 2) && (this.numOfPins === 10) && (this.previousStrike === true)){
        this.currentGameScore += this.numOfPins;
        this.previousStrike = true;
        this.resetFrame();
        this.scoringFooter();
        this.scoreCounter += 1;
      }
  //when you score a normal score on the first throw
  else if ((this.numOfFrameThrows < 2) && (this.previousStrike === false)){
      this.frameScore = this.frameScore + this.numOfPins;
      this.currentGameScore = this.scoreIndex.reduce(function(a,b) { return a + b; }, 0);
      this.previousStrike = false;
      this.incrementGameThrows();
      this.incrementFrameThrows();
      this.scoringFooter();
    }

  //when you score a normal score on the second throw
  else if ((this.numOfFrameThrows === 2) && (this.previousStrike === false)){
      this.frameScore = this.frameScore + this.numOfPins;
      this.currentGameScore = this.scoreIndex.reduce(function(a,b) { return a + b; }, 0);
      this.resetFrame();
      this.incrementGameThrows();
      this.scoringFooter();
    }

    //when you score a normal score on the first throw but the previous frame produced a strike
    else if ((this.numOfFrameThrows < 2) && (this.previousStrike === true)){
        console.log(this.numOfPins)
        this.currentGameScore += (this.numOfPins *2);
        this.incrementGameThrows();
        this.incrementFrameThrows();
        this.incrementFrameNum();
        this.scoringFooter();
      }

    //when you score a normal score on the second throw but the previous frame produced a strike
    else if ((this.numOfFrameThrows === 2) && (this.previousStrike === true)){
      console.log(this.numOfPins)
        this.currentGameScore +=(this.numOfPins *2);
        this.previousStrike = false;
        this.incrementGameThrows();
        this.resetFrame();
        this.scoringFooter();
      }
  };
