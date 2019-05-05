function Bowling(){
  this.score = 0;
  this.MAXFRAME = 10;
  this.currentFrame = 1;
  this.frame = [];
  this.score = 0;
  this.eachFrameScore = {};
}

Bowling.prototype = {
  constructor:Bowling,

  roll: function(pins){
    if(this.frame.length >= 2){
      this.frame = [];
      this.currentFrame++;
    }
    this.frame.push(pins);
    this.eachFrameScore[this.currentFrame]= this.calculateScore();
  },

  calculateScore: function(){
    return(this.frame.reduce((acc, cur)=>{
      let score = acc + cur;
      this.score += score
      return score
    }));
  }
}