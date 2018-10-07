function Game (){
  this._frames = [["-"], [], [], [], [], [], [], [], [], [],[]]; //length 11 
  // this._frames = []
  this._currentScore = 0
  this._currentFrameNumber = 1
  this._frameScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  this._totalScoreDisplay = ["-"]
}

Game.prototype = {
  
  frames : function(){
    return this._frames;
  },

  roll : function(number){
    
     //stike
    if (this._frames[this._currentFrameNumber][0] === 10) {
      this._currentFrameNumber += 1;
    } else if (this._frames[this._currentFrameNumber].length === 2) {
      this._currentFrameNumber += 1;
    }
  
    this._frames[this._currentFrameNumber].push(number);

    let frameSum = this._frames[this._currentFrameNumber].reduce(function(a, b){return a+b;}, 0);
    this._frameScore[this._currentFrameNumber] = frameSum;


    // spare
    let previousFrameScore = this._frameScore[this._currentFrameNumber - 1]
  
    if ( previousFrameScore === 10) {
      this._frameScore[this._currentFrameNumber - 1] += number;
    }
    
  },

  totalScore : function() {
    this._currentScore = this._frameScore.reduce(function(a, b){return a+b;}, 0);
    this._totalScoreDisplay.push(this._currentScore)
    return this._currentScore;
  }
}