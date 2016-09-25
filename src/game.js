// Game tracks frames and total score

var Game = function (){
  this.frames = [];
};

Game.prototype = {
  bowl: function(pins){
    frame = new Frame(pins);
    this.frames.push(frame);
  },
  score: function(){

  }

};

module.exports = Game;
