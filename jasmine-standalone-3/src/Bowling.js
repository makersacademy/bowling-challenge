function Bowling(){
  this.MINIMUMSCORE = 0;
  this.MAXIMUMSCORE = 300;
  this.PINS = 10;
  this.MAXFRAMES = 10;
  this.frame = [];
  this.currentFrame
  this.score  = 0;
}

Bowling.prototype = {
  constructor:Bowling,

  roll: function(pins){
    return(this.frame.push(pins))
  },

  calScore: function(){
    let score = (this.frame.reduce((total, currentScore)=>{
      return total + currentScore;
    }));
    this.score += score
  },

  isTwoRows: function(){
    return this.frame.length >= 2
  }
}