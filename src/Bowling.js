'use strict';

function Bowling(player = new Player(), pins = new Pins()) {
  this.player = player;
  this.pins = pins;
  this.frame = 0;
}

Bowling.prototype.play = function(knockedPin=null){
  if (knockedPin===null){knockedPin = this.possiblePins()}
  var valid = this.checkIfPlayValid(knockedPin);
  if (valid===null){
    this.player.scoreWith(this.frame, knockedPin);
    this.player.setNextRoll(this.frame);
    this.setNextFrame(knockedPin)
  } else {
    var error = this.errorHandling(valid)
    throw new Error(error)
  }
}

Bowling.prototype.possiblePins = function(){
  if (this.player.roll===0){return this.pins.knockPin(10)}
  return this.pins.knockPin(10-this.player.scoreCard[this.frame][0])
}

Bowling.prototype.errorHandling = function(error){
  switch (error) {
    case 1: return "Pin value should be >= 0"
    case 2: return "Pin value should be <= 10"
    case 3: return "Combined pin total should be <= 10"
    case 4: return "Game Over"
  }
}

Bowling.prototype.checkIfPlayValid = function(knockedPin){
  if (knockedPin<0){return 1}
  if (knockedPin>10){return 2}
  if (this.player.roll>2){return 4}
  if (this.player.roll===1 && this.frame !== 9){
    if (this.player.scoreCard[this.frame][0]+knockedPin > 10){return 3}
  }
  if (this.frame===9 && this.player.roll>1){
    if (this.isStrike(9,0) || this.isSpare(9,0)){return null}
    return 4
  }
  return null
}

Bowling.prototype.setNextFrame = function(knockedPin){
  if (this.isStrike(this.frame) && this.frame !== 9){this.player.setNextRoll()}
  if (this.player.roll===0 && this.frame < 9){
    this.workOutScore()
    this.frame ++
  }
  if (this.frame > 8 && this.player.roll > 0 ){this.workOutScore()}
}

Bowling.prototype.workOutScore = function(){
  var start = this.frame
  if (this.frame>8){start = this.tenthFrameScore()}
  for (var i=start; i>=0; i--){
    var value = null
    if (this.isStrike(i)){value = this.strikeScore(i)}
    if (this.isSpare (i)){value = this.spareScore (i)}
    if (value === null){value = this.normalScore(i)}
    this.player.score[i] = value
  }
}

Bowling.prototype.tenthFrameScore = function(){
  this.player.score[9]=this.player.scoreCard[9][0]+this.player.scoreCard[9][1]
  this.player.score[9]+=this.player.scoreCard[9][2]
  return 8
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

Bowling.prototype.isStrike = function(frame,roll=0){
  if (this.player.scoreCard[frame][roll]===10){return true}else{return false}
}

Bowling.prototype.isSpare = function(frame,roll=0){
  var value = false
  if (this.player.scoreCard[frame][roll]+this.player.scoreCard[frame][roll+1]===10){value = true}
  if (value===true && this.player.scoreCard[frame][roll+1]===null){value=false}
  return value
}
