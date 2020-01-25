'use strict'

function Scorecard(){
  this._theCard = []
}

Scorecard.prototype.addPins = function(downedPins){ this._theCard.push(downedPins)}

Scorecard.prototype.getScorecard = function(){ return this._theCard }

