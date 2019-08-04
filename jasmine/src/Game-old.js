function Game() {
  // this.frames = new Array(10).fill(null).map(function() {
  //   return new Frame()
  this.frames = [];
};

var frame

Game.prototype.addFrame = function(frame){
  for(var i=0; i < 9; i++) {
    this.frames.push(new frame); }
    this.frames.push(new FrameTen());
  };

Game.prototype.frameCount = function(){
  return this.frames.length;
};

Game.prototype.score = function(){
  var total = 0;
  for (var i = 0; i < this.frames.length; i++) {
    total += this.frames[i].frameScore; }
    return total;
};

Game.prototype.ifSpare = function(num){
  if(this.frames[num].isSpare) {
    this.frames[num].score += this.bonusRollOne(pins);
  }
};

Game.prototype.ifStrike = function(num){
  if(this.frames[num].isStrike()) {
    this.frames[num].score
    += (this.bonusRollOne(pins) + this.bonusRollTwo(pins)); }
  };

Game.prototype.bonusRollOne = function(frame){
  return this.frames[frame+1].rollOne;
};

Game.prototype.bonusRollTwo = function(frame){
  return this.frames[frame+1].rollTwo || this.frames[frame+2].rollOne;
}
// Game.prototype.bowl = function (pins) {
//   this.currentFrame.bowl(pins)
// }
//
// Game.prototype.currentFrame = function () {
//   this.frames.find(function(frame) {
//     return !frame.isComplete
//   })
// }
//
// Game.prototype.score = function () {
//   return this.frames.reduce(function(acc, frame) {
//     acc + frame.frameScore()
//   }, 0)
// }
//
// Game.prototype.addFrame = function () {
//   if (frame.isComplete == true){
//     frames.push(frame);
//     }
//   }
