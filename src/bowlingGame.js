'use strict';
function BowlingGame(){
  this.rolls = [];
  this.gameResult = 0;
  this.rollIndex = 0;
  this.rollIndex1 = 0;
  this.frameIndex = 0;
  this.frame = [];
  for(var i= 0;i<10;i++){
    this.frame[i] = [];
      for(var j=0;j<2;j++){
        this.frame[i][j]=0;
      }
  }
};

BowlingGame.prototype.roll = function(pins){
  this.rolls.push(pins);
  console.log('roll:' + this.rollIndex1);
  console.log('frame:' + this.frameIndex);
  this.frame[this.frameIndex][this.rollIndex1] = pins;
  console.log(this.frame[this.frameIndex][this.rollIndex1]);

  this.registerFrame();


}
  BowlingGame.prototype.f = function(){
    return this.frame;
  }

  BowlingGame.prototype.registerFrame = function(){
    if(this.rollIndex1<=1){
       this.rollIndex1++;
    }
    if(this.rollIndex1 > 1){
     this.rollIndex1 = 0;
     this.frameIndex++;
    }

    if(this.frameIndex>9){
      this.frameIndex = 0;
    }
  }


BowlingGame.prototype.score = function(){
  for(var frameIndex=0; frameIndex<10;frameIndex++){
    if (this.isStrike()) {
      this.getStrikeScore();
    } else if  (this.isSpare()){
      this.getSpareScore();
      this.rollIndex+=2;
    } else {
      this.getNormalScore();
      this.rollIndex+=2;
    }
  }
  return this.gameResult;
}

BowlingGame.prototype.isStrike = function(){
  return this.rolls[this.rollIndex] == 10;
}

BowlingGame.prototype.getStrikeScore = function(){
  return  this.gameResult += this.rolls[this.rollIndex] + this.rolls[this.rollIndex+1] + this.rolls[this.rollIndex+2];
}

BowlingGame.prototype.isSpare = function(){
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex+1] == 10
}

BowlingGame.prototype.getSpareScore = function(){
  return  this.gameResult += this.rolls[this.rollIndex] + this.rolls[this.rollIndex+1] + this.rolls[this.rollIndex+2];
}

BowlingGame.prototype.getNormalScore =function(){
  return this.gameResult += this.rolls[this.rollIndex] + this.rolls[this.rollIndex+1];
}
