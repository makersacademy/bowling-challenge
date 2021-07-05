function Game() {
  this._frames = [];
  this._currentFrameNumber = 1;
  this._numberOfFrames = 10;
  this._frames.push(new Frame(false))

<<<<<<< HEAD
};

Game.prototype.getTotalScore = function(){
  var perfect_game = true;
  var totalScoreForGame = 0;
  for (var i = 0; i < this._frames.length; i ++) {
    totalScoreForGame += this._frames[i].totalScoreForFrame();
    perfect_game = (perfect_game) && (this._frames[i]._strike);
  };

  perfect_game = perfect_game && (this._frames[this._frames.length-1].totalScoreForFrame() === 30)

  if (perfect_game && this._frames.length >= 10) {
   totalScoreForGame = 300;
  };
 return totalScoreForGame
=======
Game.prototype.bowl = function(pins_hit){
  this._validateThisBowl(pins);
  if (this.frameNumber === 10) {
    this.frameTenPlay(pins_hit);
  } else if (this.frameNumber !== 10) {
    this.framePlay(pins_hit);
  }
};

Game.prototype.pushTotalForFrame = function(){
for (var i=0; i < 10; i ++){
  this.frameScores.push(this.frames[i].score.sum())
  this.frameNumber = this.frameScores.indexOf(this.frames[i].score.sum())+ 1;
};
};

Game.prototype.totalPoints = function(){
  return(this.bonuses.sum() + this.frameScores.sum())
};

Game.prototype.bonusScores = function(){
  for (var i = 0; i < 10; i ++) {

    if (this.frames[i].isSpare()){
      this.bonuses.push(this.frames[i + 1].score[0])
      this.bonusScore = this.bonuses.sum();
      this.score += this.bonusScore;
    };

    if (this.frames[i].isStrike() && this.frames[i + 1].score[0] !== 10){
      this.bonuses.push(this.frames[i + 1].score.sum());
    };

    if (this.frames[i].isStrike() && this.frames[i + 1].isStrike()) {
        if (this.frames[i + 2] === undefined) {
          return ('bonus not added')
        } else {
          this.bonuses.push(this.frames[i + 1].score[0] + this.frames[i + 2].score[0]);
        };
    }

    else {return ('none'); }
  };
>>>>>>> 5924be6834240ba6f4558b7950c8028c2bbff579
};

Game.prototype.roll = function(pins_hit){

  var frame = this._frames[this._frames.length-1];
  if(!frame._done) {
    frame.roll(pins_hit)
  };

  if (this._frames.length > 1) {
    if (this._frames[this._frames.length-2]._spare) {
        this._frames[this._frames.length-2]._bonusScore = frame._frameRoll1Score;
    }
    if (this._frames[this._frames.length-2]._strike && frame._done) {
        this._frames[this._frames.length-2]._bonusScore = frame._frameRoll1Score + frame._frameRoll2Score;
    }
  }

  if (frame._done) {
    if (this._currentFrameNumber <= 9) {
      this._currentFrameNumber += 1;
      this._frames.push(new Frame(this._currentFrameNumber === 10));
    }
  };
};
