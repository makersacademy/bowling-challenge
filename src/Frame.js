function Frame(finalFrame) {
this._frameRoll1Score = 0;
this._frameRoll2Score = 0;
this._frameRoll3Score = 0;
this._bonusScore = 0;
this._strike = false;
this._done = false;
this._spare = false;
this._finalFrame = finalFrame;
this._rollNumber = 0;

Frame.prototype.totalScoreForFrame = function(){
  if (this._done) {
    return this._frameRoll1Score + this._frameRoll2Score + this._frameRoll3Score + this._bonusScore;
  }
  return 0;
};

Frame.prototype.roll = function(pins_hit) {
  if (!this._done) {

    if (this._rollNumber === 0) {
        this._frameRoll1Score = pins_hit;

        if (this._frameRoll1Score >= 10) {
          this._strike = true;
           this._done = true;
         };

    } else if (this._rollNumber === 1) {
        this._frameRoll2Score = pins_hit;
        this._done = true;
        if (this._frameRoll1Score + this._frameRoll2Score >= 10) {
          this._spare = true;
        };
    } else {
      this._frameRoll3Score = pins_hit;
      this._done = true;
    };
    this._rollNumber +=1;
  };

  if ((this._strike || this._spare) && (this._finalFrame) && (this._rollNumber < 3)) {
    this._done = false;
  };

};

};
