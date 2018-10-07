function Game (){
  this._frames = [[], [], [], [], [], [], [], [], [], [],[]]; //length 11 
  // this._frames = []
  this._currentScore = 0
  this._currentFrameNumber = 1
  this._frameScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

Game.prototype = {
  
  frames : function(){
    return this._frames;
  },

  roll : function(number){
    if(this._frames[this._currentFrameNumber].length === 2){
      this._currentFrameNumber += 1;
    }

    this._frames[this._currentFrameNumber].push(number);

    let frameSum = this._frames[this._currentFrameNumber].reduce(function(a, b){return a+b;}, 0);
    this._frameScore[this._currentFrameNumber] = frameSum;
    
    let previousFrame = this._frameScore[this._currentFrameNumber - 1]
    // if ( previousFrame === 10) {
    //   previousFrame += number;
    // }
    if ( this._frameScore[this._currentFrameNumber - 1] === 10) {
      this._frameScore[this._currentFrameNumber - 1] += number;
    }

    // if(this._frames[this._currentFrameNumber].reduce(function(a, b){return a+b;}, 0) === 10 ){
    //   this._currentScore = this._currentScore + number + this._frames[this._currentFrameNumber + 1][0];
      
    // } else {
    //   this._currentScore += number;
    // }
  },

  totalScore : function() {
    this._currentScore = this._frameScore.reduce(function(a, b){return a+b;}, 0);
    return this._currentScore;
  }
}