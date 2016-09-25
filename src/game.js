// Game tracks frames and total score

var Game = function (){
  this.frames = [];
};

Game.prototype = {
  bowl: function(pins){
    var frame = new Frame(pins);
    this.frames.push(frame);
  },
  score: function(){
    function flatten(array) {
      return array.reduce(function(a,b){
        return a.concat(b);
      })
    }
    return this.frames.map(function(array){
      return flatten(array).reduce(function(sum, element){
        return sum + element;
      })
    })
  }
};

module.exports = Game;
