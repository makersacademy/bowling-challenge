function Game (){
  this._frames = [[], [], [], [], [], [], [], [], [], []];
  this._score = 0
}

Game.prototype = {

  frames: function(){
    return this._frames;
  },

  roll: function(number){
    this._score = number
  },

  score: function() {
    return this._score;
  },

  displayScore : function() {
    return this.score();
  }
}