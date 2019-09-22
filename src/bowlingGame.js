

function BowlingGame(playerName){
  this.playerName = playerName;
  this.currentFrame = 1;
  this.currentRoll = 1;
  this.frameScores = [];
}

BowlingGame.prototype.recordScore = function(frameScore){
  this.frameScores.push(frameScore);
};

BowlingGame.prototype.nextFrame = function(){
  this.currentFrame += 1;
};

BowlingGame.prototype.play = function(number){
  var bowlingManager = new BowlingManager();
  
  if (this.currentRoll === 1){
    var bowlingScore = new BowlingScore(number);
    this.frameScores.push(bowlingScore);
    if(bowlingManager.anotherThrow(this.frameScores[this.currentFrame-1],this.currentFrame)){
      this.currentRoll = 2;
    }else{
      this.currentFrame += 1;
      this.currentRoll = 1;
    };
  }else if(this.currentRoll === 2){
    this.frameScores[this.currentFrame-1].rollTwo = number;
    if(bowlingManager.anotherThrow(this.frameScores[this.currentFrame-1],this.currentFrame)){
      this.currentRoll = 3;
    }else{
      this.currentFrame += 1;
      this.currentRoll = 1;
    }
  }else{
    this.frameScores[this.currentFrame-1].rollThree = number;
    this.currentFrame += 1;
    this.currentRoll = 1;
  }
};