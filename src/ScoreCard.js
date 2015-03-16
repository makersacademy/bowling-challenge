var ScoreCard = function(name) {

  this.name = name;
  this.score = [[]];
  this.frameNo = 0;
  this.playTurn = false;
  var currFrame = [];
  var frameBefore = [];
  var frameBeforeBefore = [];


  ScoreCard.prototype.currentScore = function() {

    var total = 0;
    for(var frame=0, n=this.score.length; frame < n; frame++) {
      var subTotal = 0;
      for(var i=0, x=this.score[frame].length; i < x; i++) {
        subTotal += this.score[frame][i];
      }
      total += subTotal;
    }

    return total;

  };

  ScoreCard.prototype.addScore = function(rollScore) {
    currFrame = this.score[this.frameNo];
    if (this._isAnyFrameAfterThe1st()) {frameBefore = this.score[this.frameNo-1]};
    if (this._isAnyFrameAfterThe2nd()) {frameBeforeBefore = this.score[this.frameNo-2]};
    
    this._scoreCheck(rollScore);

    if (this._isAnyFrameUpToThe10th() ) {
      currFrame.push(rollScore);
      if (this._frameBeforeIsASpare() && this._wasThe1stRollOfFrame() ) {frameBefore.push(rollScore)};
      if (this._frameBeforeIsASrike() ) {frameBefore.push(rollScore)};
      if (this._previousTwoRollsAreSrikes() && this._wasThe1stRollOfFrame() ) {frameBeforeBefore.push(rollScore)};
    } else {
      if (this._frameBeforeIsASpare() || this._frameBeforeIsASrike() ) {frameBefore.push(rollScore)};
      if (this._previousTwoRollsAreSrikes() && this._isThe11thFrame() ) {frameBeforeBefore.push(rollScore)};
      if (this._frameBeforeBeforeIsASrike && this._isThe12thFrame() ) {frameBeforeBefore.push(rollScore)};
   };

    if (rollScore === 10 || this._wasThe2ndRollOfFrame() || (this.frameNo === 10) ) {
      this.frameNo += 1;
      this.playTurn = false;
      this.score[this.frameNo] = [];
    };

    if (this._gameIsFinished) {this._alertGameIsFinished()};

  };
  

// Private methods

  ScoreCard.prototype._isAnyFrameAfterThe1st = function () {
    return this.frameNo > 0; 
  };

  ScoreCard.prototype._isAnyFrameAfterThe2nd = function () {
    return this.frameNo > 1; 
  };

  ScoreCard.prototype._isAnyFrameUpToThe10th = function () {
    return this.frameNo < 10; 
  };

  ScoreCard.prototype._isThe11thFrame = function () {
    return this.frameNo === 10; 
  };

  ScoreCard.prototype._isThe12thFrame = function () {
    return this.frameNo === 11; 
  };

  ScoreCard.prototype._wasThe1stRollOfFrame = function () {
    return currFrame.length === 1; 
  };

  ScoreCard.prototype._wasThe2ndRollOfFrame = function () {
    return currFrame.length === 2; 
  };

  ScoreCard.prototype._frameBeforeIsASpare = function () {
    return frameBefore[0] != 10 && (frameBefore[0] + frameBefore[1]) === 10; 
  };

  ScoreCard.prototype._frameBeforeBeforeIsASrike = function () {
    return frameBeforeBefore[0] === 10; 
  };

  ScoreCard.prototype._frameBeforeIsASrike = function () {
    return frameBefore[0] === 10; 
  };

  ScoreCard.prototype._previousTwoRollsAreSrikes = function () {
    return frameBefore[0] === 10 && frameBeforeBefore[0] === 10;
  };

  ScoreCard.prototype._gameIsFinished = function () {
    switch (this.frameNo) {
      case 12:
        return true;
      case 11:
        return frameBeforeBefore[0] < 10;
      case 10:
        return (currFrame[0] + currFrame[1]) < 10;
      default:
        return false;
    };
  };

  ScoreCard.prototype._scoreCheck = function (rollScore) {
    if ((currFrame[0] + rollScore) > 10 || rollScore > 10) {alert("cheater!")};
  };

  ScoreCard.prototype._alertGameIsFinished = function () {
    alert("Game finished, your score is "+ this.currentScore());
  };


};

