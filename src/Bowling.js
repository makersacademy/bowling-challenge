'use strict';

function Bowling(player = new Player(), pins = new Pins()) {
  this.player = player;
  this.pins = pins;
  this.frame = 0;
}

Bowling.prototype.play = function(knockedPin=null){
  if (knockedPin===null){knockedPin = this.pins.knockPin()}
  // var knockedPin = this.checkForSpecial(knockedPin);
  this.player.scoreWith(this.frame, knockedPin);
  this.player.setNextRoll(this.frame);
  this.setNextFrame(knockedPin);

}

Bowling.prototype.setNextFrame = function(knockedPin){
  if (this.isStrike(this.frame)){this.player.setNextRoll()}
  if (this.player.roll===0){
    this.workOutScore()
    this.frame ++
  }
  if (this.frame > 10){this.frame = 9}
  // if (this.frame===10&&(!this.isStrike(this.frame-1)||!this.isSpare(this.frame-1))){console.log("NO MORE GAMES")}
}

Bowling.prototype.workOutScore = function(){
  var start = this.frame
  if (this.frame>8){start = 8}
  console.log(start)
  for (var i=start; i>=0; i--){
    // console.log("i = " + i)
    var value = null
    if (this.isStrike(i)){value = this.strikeScore(i)}
    // console.log(value)
    if (this.isSpare (i)){value = this.spareScore (i)}
    if (value === null){value = this.normalScore(i)}
    this.player.score[i] = value
  }
}

Bowling.prototype.strikeScore = function(frame){
  var value = 10
  if (this.player.scoreCard[frame+1][0]===null){return "X"}
  value += this.player.scoreCard[frame+1][0] + this.player.scoreCard[frame+1][1]
  if (this.player.scoreCard[frame+1][1]===null){
    if(this.player.scoreCard[frame+2][0]===null){return "X"}
    value += this.player.scoreCard[frame+2][0]
  }
  return value
}

Bowling.prototype.spareScore = function(frame){
  var value = 10
  if (this.player.scoreCard[frame+1][0]===null){return "/"}
  value += this.player.scoreCard[frame+1][0]
  return value
}

Bowling.prototype.normalScore = function(frame){
  return this.player.scoreCard[frame][0] + this.player.scoreCard[frame][1]
}


Bowling.prototype.addFrame = function(frame, roll){
  return this.player.scoreCard[frame][0] + this.player.scoreCard[frame][1]
}

Bowling.prototype.isStrike = function(frame){
  if (this.player.scoreCard[frame][0]===10){return true}else{return false}
}

Bowling.prototype.isSpare = function(frame){
  var value = false
  if (this.player.scoreCard[frame][0]+this.player.scoreCard[frame][1]===10){value = true}
  if (value === true && this.player.scoreCard[frame][1]===null){value = false}
  return value
}
