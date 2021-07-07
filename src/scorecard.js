function Scorecard(){
  this.MAX_FRAMES = 10;
  this.frame = 1;
  this.scorecard = [];
  this.frameScore = [];
  this.currentBowlsInFrame = 0;
  this.firstScore = 0;
  this.secondScore = 0;
  this.strike = false;
  this.spare = false;
}
  Scorecard.prototype.getCurrentScore = function() {
    var scoreCount = 0;
    this.scorecard.forEach(function(element) {
      element.forEach(function(element) {
      scoreCount += element;
      });
    });
    return scoreCount;
}
  Scorecard.prototype.updateScoreAfterBowl = function(bowl_score) {
    if(this.getCurrentBowlsInFrame() === 0) {
      this.setFirstScore(bowl_score);
    }
    else if (this.getCurrentBowlsInFrame() === 1) {
      this.setSecondScore(bowl_score);
    }
  }
  Scorecard.prototype.getFrame = function() {
    return this.frame;
  }

  Scorecard.prototype.updateScorecard = function() {
      if(this.getCurrentBowlsInFrame() === 2) {
       this.scorecard.push(this.frameScore);
       this.resetScorecardScores();
      }
      this.anotherFrameRequired();
  }
  Scorecard.prototype.updateBowlsInFrame = function() {
   this.currentBowlsInFrame += 1;
  }

  Scorecard.prototype.getCurrentBowlsInFrame = function() {
    return this.currentBowlsInFrame;
  }

  Scorecard.prototype.resetScorecardScores = function() {
    this.firstScore = 0;
    this.secondScore = 0;
    this.currentBowlsInFrame= 0;
    this.frameScore = [];
    this.frame += 1;
  }

  Scorecard.prototype.isStrike = function(bowl_score) {
    if(bowl_score === 10) {
      this.strike = true;
      this.currentBowlsInFrame = 2;
      this.secondScore = 0;
      this.updateScorecard();

    }
  }
  Scorecard.prototype.isSpare = function() {
  }

  Scorecard.prototype.setFirstScore = function(first_bowl) {
    this.firstScore = first_bowl;
    this.frameScore.push(first_bowl);
    this.isStrike(first_bowl);
    this.updateBowlsInFrame();
  }

  Scorecard.prototype.setSecondScore = function(second_bowl) {
    this.secondScore = second_bowl;
    this.frameScore.push(second_bowl);
    this.isSpare(second_bowl);
    this.updateBowlsInFrame();
    this.updateScorecard();
  }
  Scorecard.prototype.anotherFrameRequired = function() {
    if(this.scorecard.length < this.MAX_FRAMES) {
    }
      else this.endOfGame();
    }
  Scorecard.prototype.endOfGame = function() {
    console.log("GAME OVER");
    return this.getCurrentScore();
    }
