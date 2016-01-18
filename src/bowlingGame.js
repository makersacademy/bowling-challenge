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
  if (this.roll === 0){
  this.bowlFirst(pinsHit);
  this.gameEnd();
  }else {
  this.bowlSecond(pinsHit);
  this.gameEnd();
  }
};

BowlingGame.prototype.bowlFirst = function(pinsHit) {

this.tenthFrame();
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

    return 'spare_second/open'; // check this is spare? spare is if clean up on second go
   }

};

BowlingGame.prototype.gutterBallFirst = function() {
if (this.PinsKnockedDown === 0) {
  this.calcTotalScore();
  this.incrementRoll();
  return 'gutter_first';
}
};

BowlingGame.prototype.spareFirstRoll = function() {
if(this.PinsKnockedDown < 10){
  this.calcTotalScore();
  this.incrementRoll();
  return 'spare_first';
}
};

BowlingGame.prototype.strikeBall = function() {
if (this.PinsKnockedDown === 10) {
this.calcTotalScore();
console.log("stike1");
this.newFrame();

return 'strike!';

}
};

// private methods
//
//
//
//


BowlingGame.prototype.incrementRoll = function() {
  console.log("increments roll called");
  this.roll=1;
};

BowlingGame.prototype.calcTotalScore = function() {
 this.totalScore = this.totalScore + this.PinsKnockedDown;

};

BowlingGame.prototype.tenthFrame = function(){
 if (this.gameFrames.length === 9) {
   console.log("tenth frame");
 }
};

BowlingGame.prototype.newFrame = function() {
  console.log('triggered newFrame')
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
        console.log("Spare Bonus Awarded");
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
        this.gameFrames[this.gameFrames.length-2].framesScores[1] + this.currentFrame.framesScores[0]) //+
      ) ;
    console.log("Double Strike Bonus Awarded");
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
     console.log("TRIGGERED UPDATE SCORE!!!!!!!!!");
     console.log(this.gameFrames[i].finalFrameScore);
     //Do something
 }
};

BowlingGame.prototype.zeroPinsDown = function(){
  this.calcTotalScore();
  this.newFrame();
  return 'gutter_second';
};

BowlingGame.prototype.gameEnd = function(){

if (this.gameFrames.length === 10 && this.gameFrames[this.gameFrames.length-1].isStrike === false && this.gameFrames[this.gameFrames.length-1].isSpare === false ) {
  console.log("GAME ENDS!!!!!!!!!!!!!!");
  this.hasEnded = true;
}
if(this.gameFrames.length === 12 && this.gameFrames[this.gameFrames.length-1].isSpare === true){
  console.log("GAME ENDS!!!!!!!!!!!!!! 12th spare");
  this.hasEnded = true;
}
if(this.gameFrames.length === 13){
  this.hasEnded = true;
  console.log("GAME ENDS!!!!!!!!!!!!!! 13th");
}
};
