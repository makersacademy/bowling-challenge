'use strict'

function Scorecard(){
  this._Card = []
  this._rolls = 20 //rolls left in the game
  this._hasBonus = true
  this._frame1 = new Frame
  this._frame2 = new Frame 
  
}

Scorecard.prototype.addPins = function(downedPins){ 
  this.rollUpdate(downedPins)
  return this.score(downedPins)
}

Scorecard.prototype.getScorecard = function(){ return this._Card }

Scorecard.prototype.isGameOver = function(){ 
  if(this._rolls === 0 ){ return "You finished the Game!" }
}

Scorecard.prototype.rollUpdate = function(downedPins){
  if(downedPins === 10 && this._rolls === 2 && this._hasBonus){this._hasBonus = false }
  else if(downedPins === 10 && this._rolls <= 2 ){ this._rolls -= 1 }
  else if(downedPins + this._Card[this._Card.length -1] === 10 && this._rolls === 1 && this._hasBonus === true )
  {this._hasBonus = false;}
  else if(downedPins === 10){this._rolls -= 2 } 
  else{ this._rolls -= 1 }
}

Scorecard.prototype.score = function(downedPins){
  if(this._frame1._throws.length < 2){ this._frame1.addroll(downedPins);}
  else if(this._frame1.check_spare()){this._frame1.addroll(downedPins); this._frame2.addroll(downedPins)}
  else{ this._frame2.addroll(downedPins)}
  
  console.log(this._frame1._throws)


  if(this._frame1._throws.length === 2 && !this._frame1.check_spare()){
    this._Card.push(this._frame1.score_frame());
    this._frame1.clearFrame()}
  else if( this._frame1._throws.length === 3 ){
    this._Card.push(this._frame1.score_frame());
    this._frame1.clearFrame()
    this._frame1._throws = this._frame2._throws
  }

  console.log(this._frame1)

  console.log(this._frame2._throws)
  
  if(this._rolls === 0){return this._Card.reduce(function(x,y){return x+y},0)}
}
 