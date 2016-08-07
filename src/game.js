function Game(){
  this.GameScore = 0
  this.frameScore = [];
}

Game.prototype.play = function () {
var times =10;
for(var i=0; i < times; i++) { this.BowlFrame(); }
this.GameScore = this.frameScore.reduce(function(a,b){
  return a+b;
},0);
};


Game.prototype.Roll = function() {
    this.roll = Math.floor(Math.random()*10);
    this._saveRoll(this.roll);
  };

Game.prototype._saveRoll = function (rollScore) {
  this.frameScore.push(rollScore);
};

Game.prototype.BowlFrame = function(){
  this.Roll();
  if (this.frameScore[0] < 10) {
  this.Roll();
  }
  return this.frameScore;
};
