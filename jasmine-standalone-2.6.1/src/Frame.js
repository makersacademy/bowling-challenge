function Frame() {
  this.score = 0
};

Frame.prototype.firstBowl = function(pins){
  this.score = this.score + pins
};

Frame.prototype.secondBowl = function(pins){
  if (this.score < 10){
  this.score = this.score + pins
} else {
    this.score = this.score
  };
};

Frame.prototype.nextFrame = function(){
this.score = 0
};

function Game(){
  this.total = []
}

Game.prototype.addFrame = function(){
var frame = this.score
this.total = this.total.push(frame)
}

Game.prototype.addScore = function(){
this.total.reduce(add, 0);
}

function add(a, b) {
    return a + b;
}
