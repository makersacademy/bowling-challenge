'use strict'

function Scorecard(){
  this._Card = []
  this._rolls = 20.0 //rolls left in the game
  this._hasBonus = true
}

Scorecard.prototype.addPins = function(downedPins){ 
  this.rollUpdate(downedPins)
  this._Card.push(downedPins)
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

 