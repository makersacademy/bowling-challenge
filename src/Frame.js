function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function add(a,b) {
  return a + b ;
}

function Frame(){
  this._Bonus = [];
}

Frame.prototype.recordFirstRoll = function(score){
  this._firstRoll = score;
}

Frame.prototype.firstRollScore = function(){
  return this._firstRoll || null;
}

Frame.prototype.recordSecondRoll = function(score){
  this._secondRoll = score;
}

Frame.prototype.secondRollScore = function(){
  return this._secondRoll || null;
}
;
Frame.prototype.isStrike = function(){
  return this._firstRoll === 10;
}

Frame.prototype.isSpare = function(){
  if (!this.isStrike() && (this._firstRoll + this._secondRoll) === 10) {
    return true;
  } else {
    return false;
  }
}

Frame.prototype.isFinished = function(){
  if (this.isStrike()){
    return true;
  }
  else if (isNumeric(this._firstRoll) && isNumeric(this._secondRoll)) {
    return true;
  } else {
    return false;
  }
}


Frame.prototype.calculateTotal = function(){
  return this.firstRollScore() + this.secondRollScore() + this.calculateBonus();
}

Frame.prototype.calculateBonus = function(){
  return this._Bonus.reduce(add,0);
}

Frame.prototype.addBonus = function(bonus){
  if (this.isFinished()){
    this._Bonus.push(bonus);
  }
}

Frame.prototype.isAllBonusAdded = function(){
  if (this.isStrike() && this._Bonus.length < 2) {
    return false;
  } else if (this.isSpare() && this._Bonus.length < 1) {
    return false;
  } else {
    return this.isFinished();
  }
}

