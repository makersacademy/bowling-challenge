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
  this.checkRounds();
  console.log(this.rounds);
};

Game.prototype.currentGame = function(){
  return this.rounds[this.frame - 1];
};

Game.prototype.checkRounds = function(){
  if(this.currentGame().round >= 2){
      this.addFrame()
    } else {
      this.addRounds()
    }
};

Game.prototype.addRounds = function(){
  if(this.currentGame().score > 0){
      this.currentGame().round += 1
      return false
    }
};
