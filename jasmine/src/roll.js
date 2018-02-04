function Roll(){}
  var score, scoreCard, strikeStatus;

  strikeStatus = false;

  Roll.prototype.roll = function(score) {
    this.score(score);
    if(score == 10) {
      this.strikeStatus = true;
    }
  };

  Roll.prototype.score = function (score) {
    this.score = score;
  };
