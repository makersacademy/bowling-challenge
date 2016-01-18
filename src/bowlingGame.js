function BowlingGame() {
    this.totalScore = 0;
    this.frameNumber = 0;
    this.roll = 0;
    this.gameFrames = [];
    this.currentFrame = new frame();
    this.PinsKnockedDown = 0;
    this.hasEnded = false;
}

BowlingGame.prototype.bowl = function(pinsHit){
  if (this.roll === 0 && this.hasEnded == false){
  this.bowlFirst(pinsHit);
  this.gameEnd();
}else if (this.hasEnded == false) {
  this.bowlSecond(pinsHit);
  this.gameEnd();
  }
else{
  throw "Game Has Ended - Start a new game to play again.";
}
};

BowlingGame.prototype.bowlFirst = function(pinsHit) {


this.PinsKnockedDown = pinsHit;
this.currentFrame.setFirstRollScore(this.PinsKnockedDown);

if (this.PinsKnockedDown === 10) {
  this.strikeBall();
}
else if (this.PinsKnockedDown === 0){
  this.gutterBallFirst();
}
else{
  this.spareFirstRoll();
}
};

BowlingGame.prototype.bowlSecond = function(pinsHit){

this.PinsKnockedDown = pinsHit ;
this.currentFrame.setSecondRollScore(this.PinsKnockedDown);

  if (this.PinsKnockedDown === 0) {
    this.zeroPinsDown();
  }
  else {
    this.calcTotalScore();
    this.newFrame();
   }

};

BowlingGame.prototype.gutterBallFirst = function() {
if (this.PinsKnockedDown === 0) {
  this.calcTotalScore();
  this.incrementRoll();
}
};

BowlingGame.prototype.spareFirstRoll = function() {
if(this.PinsKnockedDown < 10){
  this.calcTotalScore();
  this.incrementRoll();
}
};

BowlingGame.prototype.strikeBall = function() {
if (this.PinsKnockedDown === 10) {
this.calcTotalScore();
this.newFrame();
return 'strike!';

}
};

// private methods

BowlingGame.prototype.incrementRoll = function() {
  console.log("increments roll called");
  this.roll=1;
};

BowlingGame.prototype.calcTotalScore = function() {
 this.totalScore = this.totalScore + this.PinsKnockedDown;

};

BowlingGame.prototype.newFrame = function() {
  this.gameFrames.push(this.currentFrame);
  this.awardBonus();
  this.resetRoll();
  this.incrementFrame();
  this.currentFrame = new frame();
  this.resetPinsKnockedDown();
  this.updateScore();
};

BowlingGame.prototype.resetRoll = function() {
  console.log("reset roll called");
 this.roll = 0 ;
};

BowlingGame.prototype.incrementFrame = function() {
  this.frameNumber+=1;
};

BowlingGame.prototype.resetPinsKnockedDown = function() {
 this.PinsKnockedDown = 0;
};

BowlingGame.prototype.awardBonus = function(){
  if (this.gameFrames.length > 1) {
    if (this.gameFrames[this.gameFrames.length-2].isSpare === true){
       this.gameFrames[this.gameFrames.length-2]
        .setBonus(this.currentFrame.framesScores[0]);
    }
  }
  if (this.gameFrames.length > 2) {
    this.doubleStrikeBonus();
  }
};

BowlingGame.prototype.doubleStrikeBonus = function(){
  if (this.gameFrames[this.gameFrames.length-2].isStrike === true && this.gameFrames[this.gameFrames.length-3].isStrike === true ){
    console.log(this.currentFrame.framesScores);
    this.gameFrames[this.gameFrames.length-3]
      .setBonus(
        (this.gameFrames[this.gameFrames.length-2].framesScores[0] +
        this.gameFrames[this.gameFrames.length-2]
          .framesScores[1] + this.currentFrame.framesScores[0]) 
      ) ;
  }
}

BowlingGame.prototype.updateScore = function() {
  this.totalScore = 0;
 var arrayLength = this.gameFrames.length;
 for (var i = 0; i < arrayLength; i++) {
     this.gameFrames[i].setFinalFrameScore();
     if (i < 10) {
       this.totalScore  +=  this.gameFrames[i].finalFrameScore;
     }
 }
};

BowlingGame.prototype.zeroPinsDown = function(){
  this.calcTotalScore();
  this.newFrame();
  return 'gutter_second';
};

BowlingGame.prototype.gameEnd = function(){

if (this.gameFrames.length === 10 && this.gameFrames[this.gameFrames.length-1]
    .isStrike === false && this.gameFrames[this.gameFrames.length-1]
      .isSpare === false ) {
  this.hasEnded = true;
}
if(this.gameFrames.length === 12 && this.gameFrames[this.gameFrames.length-1]
    .isSpare === true){
  this.hasEnded = true;
}
if(this.gameFrames.length === 13){
  this.hasEnded = true;
}
};
