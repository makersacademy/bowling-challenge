

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
  if(this.currentFrame <= 10){
    if (this.currentRoll === 1){
      this.rollOneProcessing(number);
    }else if(this.currentRoll === 2){
      this.rollTwoProcessing(number);
    }else{
      this.rollThreeProcessing(number);
    }
  }
};

BowlingGame.prototype.reset = function(){
  this.currentFrame = 1;
  this.currentRoll = 1;
  this.frameScores = [];
}

BowlingGame.prototype.rollOneProcessing = function(number){
  var bowlingScore = new BowlingScore(number);
  this.frameScores.push(bowlingScore);
  if(bowlingManager.anotherThrow(this.frameScores[this.currentFrame-1],this.currentFrame)){
    this.currentRoll = 2;
  }else{
    this.nextFrame();
    this.currentRoll = 1;
  };
};

BowlingGame.prototype.rollTwoProcessing = function(number){
  if(this.scoreLessThanTen(number)||this.currentFrame===10){
    this.frameScores[this.currentFrame-1].rollTwo = number;
    if(bowlingManager.anotherThrow(this.frameScores[this.currentFrame-1],this.currentFrame)){
      this.currentRoll = 3;
    }else{
      this.nextFrame();
      this.currentRoll = 1;
    }
  }
};

BowlingGame.prototype.rollThreeProcessing = function(number){
  this.frameScores[this.currentFrame-1].rollThree = number;
  this.nextFrame();
  this.currentRoll = 1;
};

BowlingGame.prototype.scoreLessThanTen = function(number){  
  if((this.frameScores[this.currentFrame-1].rollOne + number)<=10){return true};
  return false;
};