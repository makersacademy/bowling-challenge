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
  this.player.setNextRoll(knockedPin);
  this.setNextFrame(knockedPin);

}

// Bowling.prototype.checkForSpecial = function(knockedPin){
//   // Checks to see if the score is a Strike or Spare
//   if (knockedPin===10 && this.player.roll===0){return "X"}
//   if (this.player.scoreCard[this.frame][0] + knockedPin ===10){return "/"}
//   return knockedPin
// }

Bowling.prototype.setNextFrame = function(knockedPin){
  // Set up the next frame
  // console.log("PIN = " + knockedPin)
  // console.log(this.isStrike(this.frame))
  // console.log(this.frame)
  if (this.isStrike(this.frame)){this.player.setNextRoll()}
  if (this.player.roll===0){
    this.workOutScore()
    this.frame ++
  }
}

Bowling.prototype.workOutScore = function(){
  for (var i=this.frame; i>=0; i--){
    console.log("i = " + i)
    var value = null
    if (this.isStrike(i)){value = this.strikeScore(i)}
    console.log(value)
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
// Bowling.prototype.workOutSpecialScore = function(){
//   for (var i=this.frame; i>=0; i--){
//     score = this.player.score[i]
//     if (this.isSpare(i,1)){score = this.addSpareScore(i)}
//   }
// }
//
// Bowling.prototype.addSpareScore = function(frame){
//   if (this.player.scoreCard[frame+1][0]!= null){
//     return 10
//   }
// }






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
