function ScoreCard(){
  this.points = 0
  this.frameCount = 0
};

ScoreCard.prototype = function(){

  addPointsScore: function(points){
    this.points += points
  },

  frameAdd: function(){
    this.frameCount += 1
  }
}

function Frame(){
  this.points = 0
  this.rollCount = 0
};

Frame.prototype = function(){

  addPointsFrame: function(points){
    this.points += points
  },

  rollAdd: function(){
    this.rollCount += 1
  }
}

function Roll(){
  this.points = 0
};

Roll.prototype = function(){

  addpointsRoll: function(points){
    this.points += points
  }
}
