function Bowling(frame, numberOfFrames) {

  this.gameFrames = [];
  this.rolls = [];
  this.bonusIndexes = [];
  for (var i = 0; i < numberOfFrames; i++) {
    this.gameFrames.push(new frame);
  }
  this.gameFrames[numberOfFrames -1].isLastFrame = true;

}

Bowling.prototype.roll = function (number) {
  this.rolls.push(number);
  var currentFrame = this.currentFrame()
  currentFrame.hit(number);
  this.applyBonus(currentFrame);
};

Bowling.prototype.applyBonus = function(frame) {
  if(frame.isStrike()) {this.applyStrikeBonus();}
  if(frame.isSpare()) {this.applySpareBonus(); };
};

Bowling.prototype.currentFrame = function(){
  return this.gameFrames.filter( function(frame) { return !frame.isOver() })[0]
};

Bowling.prototype.applyStrikeBonus = function() {
  this.bonusIndexes.push(this.rolls.length);
  this.bonusIndexes.push(this.rolls.length + 1);
};

Bowling.prototype.applySpareBonus = function() {
  this.bonusIndexes.push(this.rolls.length);
};

Bowling.prototype.bonusScore = function () {
  var rolls = this.rolls;
  return this.bonusIndexes.map(function(item){return rolls[item]}).reduce(function(item, sum){
    return item + sum;
  },0);
};

Bowling.prototype.rollScore = function(){
  return this.rolls.reduce( function(item, sum) {
    return item + sum;
  },0);
};

Bowling.prototype.score = function() {
  return(this.bonusScore() + this.rollScore());
};
