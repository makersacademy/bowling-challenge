function Game (){
  // this._frames = [[], [], [], [], [], [], [], [], [], []];
  this._frames = []
  this._score = 0
  this._currentFrameNumber = 1
  this._frameScore = 0
  
}

Game.prototype = {
  
  frames : function(){
    return this._frames;
  },

  roll : function(number){
    if(!this._frames[this._currentFrameNumber]){
      this._frames[this._currentFrameNumber] = [];
    }
    this._frames[this._currentFrameNumber].push(number);
    this._score += number;
  },

  score: function() {
    return this._score;
  },

  displayScore : function() {
    return this.score();
  }
}