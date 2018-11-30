function Scorecard(){
  this.currentScore = 0;
  this.secondBowlRequired = true;
  this.frame = 1;
  this.MAX_FRAMES = 10;
  this.currentBowlsInFrame = 0;
  this.firstScoreInFrame = 0;
  this.secondScoreInFrame = 0;
  this.combinedScoreInFrame = 0;
}

  Scorecard.prototype.postBowlCheck = function() {
    this.anotherFrameRequired();
    this.updateFrame();
  }

  Scorecard.prototype.getCurrentScore = function() {
    return this.currentScore;
  }
  Scorecard.prototype.updateScoreAfterBowl = function(bowl_score) {
    this.isStrike(bowl_score);
    this.isSpare(bowl_score);

  if(this.getCurrentBowlsInFrame() === 0) {
    this.firstScoreInFrame = bowl_score;
    this.currentScore += bowl_score;
    this.updateBowlsInFrame();
  }
  else if (this.getCurrentBowlsInFrame() === 1) {
    this.secondScoreInFrame = bowl_score;
    this.currentScore += bowl_score;
    this.updateBowlsInFrame();
    this.postBowlCheck();
    this.resetFrameScores();
  }
  // else {
  //     frame 10 'stuff'
  // }

  }
  Scorecard.prototype.getSecondBowlRequired = function() {
    return this.secondBowlRequired;
  }
  Scorecard.prototype.getFrame = function() {
    return this.frame;
  }

  Scorecard.prototype.updateFrame = function() {
      if(this.getCurrentBowlsInFrame() === 2) {
       this.frame += 1;
       this.resetFrameScores;
      }
  }
  Scorecard.prototype.updateBowlsInFrame = function() {
   this.currentBowlsInFrame += 1;
  }

  Scorecard.prototype.getCurrentBowlsInFrame = function() {
    return this.currentBowlsInFrame;
  }

  Scorecard.prototype.anotherFrameRequired = function() {
    if(this.frame < this.MAX_FRAMES) {
    }
      else endOfGame();
    }

  Scorecard.prototype.endOfGame = function() {
    getCurrentScore();
  }

  Scorecard.prototype.resetFrameScores = function() {
    this.firstScoreInFrame = 0;
    this.secondScoreInFrame = 0;
    this.currentBowlsInFrame = 0;
  }

  Scorecard.prototype.isStrike = function(bowl_score) {
    if(bowl_score === 10) {
      this.updateBowlsInFrame();
    }
  }
  Scorecard.prototype.isSpare = function() {


  }


  // Scorecard.prototype.updateScoreAfterBowl = function(bowl_score) {
  //   if (bowl_score === 10) {
  //     this.frame += 1;
  //     this.postBowlCheck();
  //   }
  //   this.currentBowlsInFrame += 1;
  //   this.currentScore += bowl_score;
  //   this.postBowlCheck();
  // }
