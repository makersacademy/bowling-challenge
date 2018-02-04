function Roll(){}
  var frameScore, score, scoreCard, strikeStatus, spareStatus;

  strikeStatus = false;
  spareStatus = false;
  frameScore = 0;

  Roll.prototype.rollOne = function(score) {
    this.score(score);
    // if Strike then no need for extra bowl in this frame
    if(score == 10) {
      return this.strikeStatus = true;
    }
    // if not Strike then need to store score and bowl again
    else if (score < 10){
      this.frameScore = score;
      return this.spareStatus = true;
    }
    this.rollTwo();
  };

  Roll.prototype.rollTwo = function(score) {
    if(strikeStatus == true) {
      this.score = 0;
    } else {
      this.score = score; // gets score from rollTwo
    }
    // if rolls 1 & 2 add up to 10 = Spare
    if(score + frameScore == 10){
      this.spareStatus = true;
    }
    return this.frameScore += score;
  };

  Roll.prototype.score = function (score) {
    this.score = score;
  };
