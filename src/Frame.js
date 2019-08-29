'use strict'

function Frame() {

this.allPinsDown = [];
this.displayAllPinsDown = [];
this.pinsDown = [];
this.scores = [];
this.pending = [];
this.scoreSoFar = 0;
this.bonus = 0;

}

Frame.prototype.pinsDown = function() {
  return this.pinsDown
}

Frame.prototype.allPinsDown = function() {
  return this.allPinsDown
}

Frame.prototype.bonus = function() {
  return this.bonus
}

Frame.prototype.isNormalFrame = function(value1, value2){
  return (value1 + value2) < 10
}

Frame.prototype.isStrike = function(value1){
  return value1 === 10
}

Frame.prototype.isSpare = function(value1, value2){
  return value1 + value2 === 10
}

Frame.prototype.isFirstFrame = function(value){
  return this.scores.length === 0
}

Frame.prototype.gameOver = function(value) {
  return this.scores.length === 10
}

Frame.prototype.isPenultimateFrame = function(value) {
  return value === 9
}

Frame.prototype.updateScores = function(){
  this.scores.push(this.pending[0]+this.pending[1] + this.scoreSoFar + this.bonus)
}

Frame.prototype.updateScoresStrikeSpare = function(){
this.scores.push((this.pending[0] + this.pending[1] + this.pending[2]) + this.scoreSoFar )
}

Frame.prototype.insertRoll1 = function(value){
  if(this.gameOver(this.scores.length)){
    throw new Error ("No frames left");
  }

this.pinsDown[0]= value;

if(this.isStrike(value)) {
this.pinsDown[1] = 0
this.allPinsDown.push([10,0])
this.displayAllPinsDown.push(["X",0])
this.pending.push(10)
this.updatePending();
}
else
this.pending.push(value);
}


Frame.prototype.updatePending = function(){

 var i
 for(i=0; i<3; i++)
 {
  if(this.scores.length > 0)
  {this.scoreSoFar = this.scores[this.scores.length -1]}


  if(((this.isPenultimateFrame(this.scores.length)) && (this.pending.length >= 2)) || ((this.isNormalFrame(this.pending[0], this.pending[1]))))
  {
   this.updateScores();
     this.pending = [];
   }

  else if((this.isStrike(this.pending[0])) && (this.pending.length >= 3))
  { console.log(this.pending.length + "three")
    this.updateScoresStrikeSpare();
   this.pending.shift();
   console.log(this.pending.length + "after")
 }

   else if((this.isSpare(this.pending[0], this.pending[1]))  && (this.pending.length>2))
  { this.updateScoresStrikeSpare();
    this.pending.shift();
    this.pending.shift();
  }
}
}

Frame.prototype.insertRoll2 = function(value){
this.pinsDown[1]= value;
if(this.isSpare(this.pinsDown[0], this.pinsDown[1])){
  this.displayAllPinsDown.push([this.pinsDown[0], "/"])
}
else
{this.displayAllPinsDown.push([this.pinsDown[0], this.pinsDown[1]])}
this.allPinsDown.push([this.pinsDown[0], this.pinsDown[1]]);
this.pending.push(value);
this.updatePending();
}


Frame.prototype.insertBonusRoll = function(value){

  this.bonus = value;
  if(this.isStrike(this.pinsDown[0]))
  {
    this.scores.push( this.scores[this.scores.length-1] + this.bonus + this.pending[0] + this.pending[1] )}
  else
  {this.scores[this.scores.length-1] = this.scoreSoFar + this.bonus}
}
