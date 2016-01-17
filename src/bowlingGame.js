function BowlingGame() {
    this.totalScore = 0;
    this.frameNumber = 0;
    this.roll = 0;
    this.gameFrames = [];
    this.currentFrame = new frame();
    this.PinsKnockedDown = 0;
}

BowlingGame.prototype.bowl = function(pinsHit){
  if (this.roll === 0){
  this.bowlFirst(pinsHit);

  }else {
  this.bowlSecond(pinsHit);

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

this.PinsKnockedDown = pinsHit ;//Math.floor(Math.random() * (this.pinsLeftOver - 0) + 0);
this.rollArray.push(this.PinsKnockedDown);
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

// private methods

BowlingGame.prototype.tenthFrame = function(){
 if (this.gameFrames.length === 9) {
   console.log("tenth frame");
 }
};
