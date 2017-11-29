function Game() {
  this.rounds = [];
  this.frame = 0
  this.currentround = 0
  this.currentpoints = 0
  this.change = 0
  this.game = {}
};

Game.prototype.addFrame = function(){
  this.frame += 1
  this.currentround = 1
  this.currentpoints = 0
  this.rounds.push({frame: this.frame, round: this.currentround, score: this.currentpoints})
};

Game.prototype.roll = function(points){
  this.currentpoints += points;
  this.currentGame().score = this.currentpoints
  this.check_Strike()
  this.checkRounds()
  // console.log(this.rounds);
};

Game.prototype.currentGame = function(){
  return this.rounds[this.frame - 1];
};

Game.prototype.checkRounds = function(){
  if(this.currentGame().round === 2){
      this.addFrame()
    } else {
      this.addRounds()
    }
};

Game.prototype.addRounds = function(){
  if(this.currentGame().score > 0 && this.currentGame().score < 11){
      this.currentGame().round += 1
    }
  else{
      this.currentGame().score = 10
      this.currentGame().round = 2
  }
};

Game.prototype.check_Strike = function(){
  if(this.currentGame().score === 10){
    this.addRounds()
  } else {
    return false
  }
};

Game.prototype.totalScore = function(){
  console.log(this.rounds.map(a => a.score))
  var points = this.rounds.map(a => a.score)
  var sum = points.reduce(function(a,b){return a + b;}, 0);
  return sum 
};
