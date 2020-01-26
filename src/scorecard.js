'use strict'

function Scorecard(){
  this._Card = []
  this._rolls = 20.0 //rolls left in the game
}

Scorecard.prototype.addPins = function(downedPins){ 

  this._Card.push(downedPins)
  if(downedPins === "X"){this._rolls -= 2 } else { this._rolls -= 1 }

}

Scorecard.prototype.getScorecard = function(){ return this._Card }

// Idk if the belwo is good it woould be bettder if we could modify rolls
Scorecard.prototype.gameLimit = function(){ 
  if( this._Card[0] === "X" ){ this._rolls-- }
  else if( this._Card[this._Card.length-1] === 'X' && this._Card.length ){
    this._rolls--
  } else { this._rolls += 0.5 }
}

// is the below function vacuous?

Scorecard.prototype.ballRolled = function(){ this._rolls -= 0.5 }

Scorecard.prototype.isGameOver = function(){ 
  if(this._rolls === 0 ){ return "You finished the Game!" }
}
