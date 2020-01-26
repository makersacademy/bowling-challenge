

function BowlingRules() {
  this.turnHash = {
    pins1stRole: 0,
    pins2ndRole: 0,
    score: 0,
    spares: 0,
    nextTurn: 1,
    displayPins1stRole:"",
    displayPins2ndRole:"",
    displayScore:""};
  scoreArray = [this.turnHash];
}

BowlingRules.prototype.takeTurn = function(role, pins) {
if (this._isEven(role) === true) {
  BowlingRules.prototype.updateEvenRole(role, pins)
} else {
  BowlingRules.prototype.updateOddRole(role, pins)
}
BowlingRules.prototype._calcBonus(role,pins)
return scoreArray
};

BowlingRules.prototype.updateOddRole = function(role, pins) {
  if (pins === 10){
    var spares = 2;
    var nextTurn = role + 2
    var displayPins = "X"
  } else {
    var nextTurn = role + 1
    var displayPins = String(pins)
  }
  
  this.turnHash = {
    pins1stRole: pins,
    pins2ndRole: 0,
    score: pins,
    spares: spares,
    nextTurn: nextTurn,
    displayPins1stRole: displayPins,
    displayPins2ndRole: "",
    displayScore: "",
  };
  scoreArray.push(this.turnHash);
  return scoreArray;
}

BowlingRules.prototype.updateEvenRole = function(role, pins) {
  retrieveArrayPlace = role / 2
  this.turnHash = scoreArray[retrieveArrayPlace];
  if ((pins + this.turnHash.score) === 10){
    this.turnHash.spares = 1;
    var displayPins = "/"
  } else {
    var displayPins = String(pins)
    this.turnHash.displayScore = String(pins + this.turnHash.score)
  }
  
  this.turnHash.pins2ndRole = pins;
  this.turnHash.score += pins;
  this.turnHash.nextTurn = role +1;
  this.turnHash.displayPins2ndRole = displayPins

  scoreArray[retrieveArrayPlace] = this.turnHash
  return scoreArray;
}

BowlingRules.prototype._calcBonus = function(role, pins){
  for(let i = 0; i < ((role)/2); i++) {
    this.turnHash = scoreArray[i]
    if(this.turnHash.spares >0){
      this.turnHash.spares -= 1
      this.turnHash.score += pins
      if(this.turnHash.spares === 0){
        this.turnHash.displayScore = String(this.turnHash.score)
      }
      scoreArray[i] = this.turnHash
    }
  }
}
  
BowlingRules.prototype._isEven = function(role) {
  if (role % 2 === 0 ) {return true}
  else {return false}
}
