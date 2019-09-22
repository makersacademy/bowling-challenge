

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
  if (this.currentRoll === 1){
    var bowlingScore = new BowlingScore(number);
    this.frameScores.push(bowlingScore);
    if(bowlingScore.isStrike()){
      this.currentFrame += 1;
      this.currentRoll = 1;
    }else{
      this.currentRoll = 2;
    };
  }else if(this.currentRoll === 2){
    this.frameScores[this.currentFrame-1].rollTwo = number;
    this.currentFrame += 1;
    this.currentRoll = 1;
  }else{
    // todo
  }
};